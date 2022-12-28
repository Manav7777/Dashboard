import React, { useEffect, useState } from "react";
import { Input, Form, Button, message } from "antd";
import axios from "axios";

const EditUserForm = (props) => {
  console.log("propsUsers", props.user);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState(props.user.email);
  const [userPassword, setUserPassword] = useState(props.user.password);
  const [userConfirmPass, setConfirmPass] = useState(props.user.confirmpass);

  let userDetail = props.user;

  useEffect(() => {
    console.log("UseEffect User", props.user);
  }, [props.user]);

  // console.log("userDetail", userDetail);
  // console.log("updated ", userDetail.name, userName);

  // Update User API
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:4000/api/updateUser", {
        id: userDetail.id,
        name: userName,
        email: userEmail,
        // password: userPassword,
        // confirmpass: userConfirmPass,
      })
      .then((response) => {
        console.log("Updated response :", response);
        props.showUsersHandler();
        props.onCancel();
        message.success("Updted");
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 7 }}
        wrapperCol={{
          span: 14,
        }}
        autoComplete="off"
      >
        <Form.Item label="Frist Name">
          <Input
            placeholder="Enter Name"
            value={userName ? userName : userDetail.name}
            // value={}
            onChange={(e) => setUserName(e.target.value)}
            span={12}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder="Enter Email"
            span={12}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            placeholder="input password"
            value={userPassword}
            // onBlur={validatePasswordHandler}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Confirm Password">
          <Input.Password
            placeholder="input password"
            value={userConfirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 7,
            span: 14,
          }}
        >
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUserForm;
