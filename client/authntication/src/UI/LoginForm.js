import react, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input, Row, Col, message, Modal } from "antd";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../components/hooks/auth";

const LoginForm = () => {
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const auth = useAuth();
  const emailChangesHandler = (e) => {
    setEmailValid(e.target.value);
  };
  const passwordChangesHandler = (e) => {
    setPasswordValid(e.target.value);
  };
  const onFinishLogin = async () => {
    const userLoginDatas = {
      email: emailValid,
      password: passwordValid,
    };

    console.log(userLoginDatas);
    await axios
      .post("http://localhost:4000/api/loginUser", userLoginDatas)
      .then((response) => {
        const approve = response.data.message.is_Active
        
         console.log("loginUser",response);
         if(approve){
          message.error('you hadbeen disable by Admin');
          return false;
         }
        const userName = response.data.message.name;
        const role = response.data.message.role;
        if (response) {
          if (role === 1) {
            auth.login(response.data.message);
            navigate("/admin");
          } else {
            message.success("you have Sucessfully Loged in");
            auth.login(response.data.message);
            navigate(redirectPath, { replace: true });
            // window.location = '/dashboard';
          }
        }
        if (!response) {
          message.error("You Have Been Banned From This Site");
        }
      })

      .catch((error) => {
        console.log(error);
        const errorMessage = error.response.data.message;
        if (error) {
          Modal.error({
            title: "Login Error",
            content: errorMessage,
          });
        }
      });
    setEmailValid("");
    setPasswordValid("");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="data">
      <Row>
        <Col span={24}>
          <div className="data-flex align-center">
            <h1>Login</h1>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{
                span: 8,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinishLogin}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                onChange={emailChangesHandler}
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                onChange={passwordChangesHandler}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Form.Item>
                  <p>
                    If You Want Register please{" "}
                    <Link to="/register">Register</Link>
                  </p>
                </Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LoginForm;
