import React, { Fragment } from "react";
import UserTable from "./UserTable";

const UsersExist = () => {
  return (
    <Fragment>
      <div className="col-lg-12 mb-4 order-0">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="card-body">
              <h5 className="card-title text-primary">
                <div className="d-flex justify-content-center align-items-center">
                  Active Users
                </div>
              </h5>
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersExist;
