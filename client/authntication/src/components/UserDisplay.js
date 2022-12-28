import React from "react";
import { useAuth } from "./hooks/auth";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserDisplay = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const logoutHandler = () =>{
    auth.logout();
    navigate("/login");
  }

  return (
    <div className="App add-center">
      <h1>Welcome Mr {auth.userName}</h1>
      <Button onClick={logoutHandler}>Log-Out</Button>
    </div>
  );
};
export default UserDisplay;
