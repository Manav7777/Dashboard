import React, { useState } from "react";
import axios from "axios";
import { Col, Input, Row, Form, Button, message, Modal } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
const { Option } = Select;

const REGX = {
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  HTML: /(<([^>]+)>)/gi,
  WEBSITE:
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,9}(:[0-9]{1,5})?(\/.*)?$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
};
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  // ! For Validate Form
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpassError, setConfirmPassError] = useState("");

  const validation = () => {
    if (name === "") {
      setNameError("Name is require");
      return false;
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("Email is require");
      return false;
    }
    if (!REGX.EMAIL.test(email)) {
      setEmailError("Please Enter a Valid Email");
      return false;
    } else {
      setEmailError("");
    }
    if (!REGX.PASSWORD.test(password)) {
      setPasswordError(
        "Password is invalid Password length minimum 6 characters 1 uppercase  1 lowercase 1 numeric 1 special character"
      );

      return false;
    } else {
      setPasswordError("");
    }
    if (confirmpass === "" || !confirmpass === password) {
      setConfirmPassError(
        "Please Enter valid password & confirmpass should be same as password"
      );
      return false;
    }
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");
    return true;
  };

  const addDataHandler = async (e) => {
    if (validation()) {
      e.preventDefault();
      const dataObject = {
        name: name,
        email: email,
        password: password,
        confirmpass: confirmpass,
      };
      await axios
        .post("http://localhost:4000/api/register-user", dataObject)
        .then((response) => {
          if (response) {
            return message.success("Sucessfully Registered");
          }
          if (!response) {
            message.error("An Error occur when creating Account");
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
      // }
    } else {
      Modal.error({
        title: "Registration Error",
        content: "Please Valid Fields",
      });
    }
  };

  return (
    <Row>
      <Col span={24} className="sub-element align center">
        <div className="data-flex align-center">
          <h1 className="t-center">Register</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{
              span: 8,
            }}
            autoComplete="off"
          >
            <Form.Item label="Frist Name">
              <Input
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // onChange={name}
                className={nameError ? "error-border" : ""}
                span={12}
              />
              <span className="error-text">{nameError}</span>
            </Form.Item>
            <Form.Item label="Email">
              <Input
                placeholder="Enter Email"
                value={email}
                span={12}
                onChange={(e) => setEmail(e.target.value)}
                // onBlur={validateEmailHandler}
                className={emailError ? "error-border" : ""}
                required
              />
              <span className="error-text">{emailError}</span>
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password
                placeholder="input password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onBlur={validatePasswordHandler}
                required
              />
              <span className="error-text">{passwordError}</span>
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input.Password
                placeholder="input password"
                value={confirmpass}
                onChange={(e) => setConfirmPass(e.target.value)}
                // onBlur={validateConfPasswordHandler}
                required
              />
              <span className="error-text">{confirmpassError}</span>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Form.Item>
                <p>
                  If You are Already Register please{" "}
                  <Link to="/login">Login</Link>
                </p>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                onClick={addDataHandler}
                // disabled={!isVali}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterForm;
