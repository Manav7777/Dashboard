import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/hooks/auth";

const TopNavDash = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a
            className="nav-item nav-link px-0 me-xl-4"
            href="javascript:void(0)"
          >
            <i className="bx bx-menu bx-sm" />
          </a>
        </div>
        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Place this tag where you want the button to render. */}
            <li className="nav-item lh-1 me-3">
              <span />
            </li>
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src={`${process.env.REACT_APP_IMG_URL}/assets/img/ivancik.jpg`}
                    alt=""
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src={`${process.env.REACT_APP_IMG_URL}/assets/img/ivancik.jpg`}
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">
                          {auth.userName}
                        </span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user me-2" />
                    {/* <span className="align-middle">My Profile</span> */}
                    <Link to="users/user-profile" className="align-middle">My Profile</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2" />
                    <span className="align-middle">Settings</span>
                  </a>
                </li>

                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-power-off me-2" />
                    <span className="align-middle" onClick={logoutHandler}>
                      Log-Out
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopNavDash;
