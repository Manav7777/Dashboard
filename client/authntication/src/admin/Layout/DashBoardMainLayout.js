import React, { Fragment } from "react";
import DashBoardLayoutPage from "./DashBoardLayoutPage";
import SideBarMenu from "./SideBarMenu";
import HeadDash from "../Common/HeadDash";
import FooterDash from "../Common/FooterDash";


const DashBoardMainLayout = () => {
  return (
    <Fragment>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <HeadDash/>
            <SideBarMenu/>
            <DashBoardLayoutPage/>
            <FooterDash/>
        </div>
      </div>
    </Fragment>
  );
};

export default DashBoardMainLayout;
