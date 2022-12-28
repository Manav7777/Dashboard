import React, { Fragment } from "react";
import Bottomfooterdash from "../pages/Bottomfooterdash";
import CommonInnerLayout from "../pages/CommonInnerLayout";
import TopNavDash from "../pages/TopNavDash";


const DashBoardLayoutPage = () => {
  return (
    <Fragment>
      <div className="layout-page">
        {/* Navbar */}
        <TopNavDash />
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <CommonInnerLayout />
          {/* Footer */}
          <Bottomfooterdash />
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
    </Fragment>
  );
};

export default DashBoardLayoutPage;
