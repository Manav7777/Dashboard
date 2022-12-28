import React, { Fragment, useEffect } from "react";
import "./assets/style.css"
import "antd/dist/antd.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./UI/LoginForm";
import RegisterForm from "./UI/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDisplay from "./components/UserDisplay";
import { AuthProvider } from "./components/hooks/auth";
import { RequireAuth } from "./UI/RequireAuth";
import Home from "./UI/Home";
import NavBar from "./Common/NavBar";
import DashBoard from "./UI/DashBoard";
import AdminDashboard from "./admin/DashBoard/AdminDashboard";
import RequireAdminAuth from "./UI/RequireAdminAuth";
import UsersExist from "./admin/pages/UsersExist";
import PageNotFound from "./UI/PageNotFound";
import AdminUserContent from "./admin/pages/AdminUserContent";
import OurServices from "./UI/Services-UI/OurServices";

function App() {
  let localUser = localStorage.getItem("User");
  let pathName = window.location.pathname;

  useEffect(()=>{
   if(pathName == "/admin"){
    window.location.replace("admin/index");
   }
  },[pathName])
  return (
    <Fragment>
      <AuthProvider>
        <BrowserRouter>
          {!localUser ? (
            <header className="head-height">
              <NavBar />
            </header>
          ) : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="services" element={<OurServices/>}/>
            <Route
              exect
              path="profile"
              element={
                <RequireAuth>
                  <UserDisplay />
                </RequireAuth>
              }
            />
            <Route
              exect
              path="dashboard"
              element={
                <RequireAuth>
                  <DashBoard />
                </RequireAuth>
              }
            />
            <Route
              exect
              path="admin"
              element={
                <RequireAdminAuth>
                  <AdminDashboard />
                </RequireAdminAuth>
              }
            >
              <Route path="index" element={<AdminUserContent />} />
              <Route path="users" replace element={<UsersExist />} >
                <Route path="user-profile" element={<UsersExist />}/>
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
