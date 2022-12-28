import React from "react";
import { Route, Routes } from "react-router-dom";
// import AdminUserContent from "./AdminUserContent";
// import UsersExist from "./UsersExist";
import routes from "../routes";

const CommonInnerLayout = () => {
  return (
    <>
      <div>
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <Routes>
              {routes.map((route, id) => {
                console.log(route);
                return (
                  route.element && (
                    <Route
                      key={id}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={<route.element />}
                    />
                  )
                );
              })}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonInnerLayout;
