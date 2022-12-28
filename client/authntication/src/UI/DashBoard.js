import React, { Fragment } from "react";
import { useAuth } from "../components/hooks/auth";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Menu, Space } from "antd";
import "./DashBoard.min.css"

const DashBoard = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    auth.logout();
    navigate("/login");
  };
  const menu = (
    <Menu
      items={[
        {
          label: <span>{auth.userName}</span>,
          key: "0",
        },
        {
          label: <span>Settings</span>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: <span onClick={logoutHandler}>Log-Out</span>,
          key: "3",
        },
      ]}
    />
  );

  return (
    <Fragment>
      <div className="nav-dash fixed-top">
        <div className="container-custom">
          <ul>
            <li className="nav-link">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      {auth.userName[0]}
                    </Avatar>{" "}
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="user-avtar"></div>
      </div>
      <div className="add-center">
        <h1>Welcome {auth.userName} 🎉</h1>
      </div>
    </Fragment>
  );
};

export default DashBoard;
