import React from "react";
import { useAuth } from "../../components/hooks/auth";

const AdminUserContent = () => {
    const auth = useAuth();

  return (
    <div>
      <div className="col-lg-12 mb-4 order-0">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="card-body">
              <h5 className="card-title text-primary">
                <div className="d-flex justify-content-center align-items-center">
                  Congratulations {auth.userName}! 🎉
                </div>
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="javascript:;"
                  className="btn btn-sm btn-outline-primary"
                >
                  View Badges
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserContent;
