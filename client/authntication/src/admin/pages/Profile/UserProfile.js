import React, { useEffect, useState } from "react";
import {getUserDetails} from "../../../service/UpdateApi"


const UserProfile = (props) => {

  const [adminDetails,setAdminDetails] = useState(JSON.parse(localStorage.getItem("User")));

  

  useEffect(()=>{
    console.log("adminDetails",adminDetails)
  },[adminDetails])

  const UpdateAdminHandler = (id) =>{
   localStorage.setItem('User',JSON.stringify(adminDetails));
   let name = JSON.stringify(adminDetails.name);
   let email = JSON.stringify(adminDetails.email);

    getUserDetails(id,name,email)
    .then((response) => {
      console.log(response)
      return (response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

 
  return (
    <div>
      <div className="col-xl">
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Admin Details</h5>
            <small className="text-muted float-end">Default label</small>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-default-fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basic-default-fullname"
                  placeholder="John Doe"
                  // defaultValue={adminDetails.name}
                  value={adminDetails.name}
                  onChange={(e)=>setAdminDetails({
                    ...adminDetails,
                    name:e.target.value
                  })}
                  // defaultValue={adminDetails.name}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="basic-default-email">
                  Email
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="text"
                    id="basic-default-email"
                    className="form-control"
                    placeholder="john.doe"
                    aria-label="john.doe"
                    aria-describedby="basic-default-email2"
                    value={adminDetails.email}
                    onChange={(e)=>setAdminDetails({
                      ...adminDetails,
                    email:e.target.value
                    })}

                  />

                </div>
                <div className="form-text">
                  You can use letters, numbers &amp; periods
                </div>
              </div>

              <button type="button" className="btn btn-primary" onClick={()=>UpdateAdminHandler(adminDetails.id)}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
