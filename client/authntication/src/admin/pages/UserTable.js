import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Modal, Table, Checkbox, Button } from "antd";
import "../../App.css";
import EditFieldModel from "../Models/EditFieldModel";
import { getUserDetails } from "../../service/UpdateApi";
import SearchFilter from "../../Common/SearchFilter";
import MultipleCheckbox from "../../Common/MultipleCheckbox";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const columns = [
  {
    title: "Sr no",
    dataIndex: "srno",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Profile",
    dataIndex: "profile",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

const UserTable = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [adminDetails, setAdminDetails] = useState("");
  const [passUsers, setPassUsers] = useState();

  // Search Filter
  const [search, setSearch] = useState(null);
  const [dataUser, setDataUsers] = useState([]);

  // Multiple Checkbox
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [showHidebtn, setShowHideBtn] = useState();
  const [isActive, setIsActive] = useState([]);

  // Search Filter
  const bySearch = (allUsers, search) => {
    if (search) {
      return allUsers.name.toLowerCase().includes(search.toLowerCase());
    } else return allUsers;
  };

  const filteredList = (users, search) => {
    return users.filter((user) => bySearch(user, search));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  // Multiple Checkbox
  const selectAllUsers = (e) => {
    setShowHideBtn(e.target.checked);
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((select) => select.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const singleSelect = (e) => {
    const { id, checked } = e.target;
    setShowHideBtn(checked);
    console.log("checked", checked);
    console.log("checked111", id);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  console.log("isCheck", isCheck);

  // Delete Multiple IDS

  const deleteSelectedIDS = async () => {
    if (isCheck) {
      const multipleIds = isCheck.map((ids) => {
        return ids;
      });
      await axios
        .post("http://localhost:4000/api/deleteSelectedUsers", {
          id: multipleIds,
        })
        .then((response) => {
          message.success("successfully Deleted Multiple users");
          showUsersHandler();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Edit Model
  const handleCancle = () => {
    setIsModelOpen(false);
  };

  const showModel = (data) => {
    setUserId(data);
    setIsModelOpen(true);
  };

  // Delete User Api
  const deleteUserHandler = async (id) => {
    await axios
      .post("http://localhost:4000/api/deleteuser", {
        id: id,
      })
      .then((response) => {
        if (response) {
          showUsersHandler();
          message.success("sucessfully Deleted User");
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update Api Service
  const updateUser = (id) => {
    getUserDetails(id)
      .then((response) => {
        return showModel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("isActive", isActive);

  // Unapprove User API
  const unApproveUser = async (id, status) => {
    console.log(id);
    if (isCheck == 0) {
      await axios
        .post("http://localhost:4000/api/unappove", {
          id: id,
          is_Active: !status,
        })
        .then((response) => {
          showUsersHandler();
          if (status == 0) {
            message.success(`Sucess fully UnApprove`);
          } else {
            message.success(`Sucess fully Approve`);
          }
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const multipleIds = isCheck.map((ids) => {
        console.log("IDS OF MULTIPLE", ids);
        return ids;
      });

      // console.log("Multiple IDS",multipleIds)
      // console.log("Multiple IDS",!status)
      await axios
        .post("http://localhost:4000/api/unappove", {
          id: multipleIds,
          is_Active: !status,
        })
        .then((response) => {
          showUsersHandler();
          if (status == 0) {
            message.success(`Sucess fully UnApprove`);
          } else {
            message.success(`Sucess fully Approve`);
          }
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Multiple Un Approve User API
  const statusHandler = async () => {
    const statusObj = [];
    const IDS =[];
    const STATUS = [];
    isActive.map((status) => {
      statusObj.push({ id: status.id, is_Active: !status.is_Active });
    });
    statusObj.map( (active) => {
      let IDSDATA = IDS.push(active.id)
      console.log(IDSDATA);
      return IDSDATA;
    });
    statusObj.map( (active) => {
      let STATUSDATA = STATUS.push(active.is_Active)
      console.log(STATUSDATA);
      return STATUSDATA;
    });
    console.log(IDS);
    console.log(STATUS);


    // statusObj.map(async (active) => {
    await axios
      .post("http://localhost:4000/api/multiStatus", {
        id: IDS,
        is_Active: !STATUS,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // });
  };

  // Display Users Api
  const showUsersHandler = async () => {
    let showUsers = await axios
      .post("http://localhost:4000/api/totalUsers")
      .then((response) => {
        // setAllUsers(response.data);
        let adminData = response.data.filter((admin) => {
          return admin.role == 1;
        });
        setAdminDetails(adminData);
        let filter = response.data.filter((user) => {
          return user.role == 2;
        });

        setPassUsers(filter);
        setDataUsers(filter);
        setList(filter);
        setTotalUsers(filter.length);
        setIsActive(filter);
        return filter;
      })
      .catch((error) => {
        console.log(error);
      });
    setAllUsers(showUsers);
    setDataUsers(showUsers);

    return showUsers;
  };

  const confirm = (id, name) => {
    Modal.confirm({
      title: `Are you sure that you want to delete User: ${name} user?`,
      okText: "Yes, Delete it",
      cancelText: "Cancel",
      onOk: () => {
        deleteUserHandler(id);
      },
    });
  };

  useEffect(() => {
    showUsersHandler();
  }, []);
  let i = 0;
  return (
    <div>
      <h5 className="card-header d-flex">
        <h4>Total Users:</h4>{" "}
        <span className="badge badge-center rounded-pill bg-label-primary">
          {totalUsers}{" "}
        </span>
      </h5>
      <div className="table-responsive text-nowrap">
        <SearchFilter change={searchHandler} value={search} />

        <DropdownButton
          id="dropdown-button-dark-example2"
          menuVariant="dark"
          title="Dropdown button"
          className="mt-2"
          style={{
            visibility: `${isCheck.length ? "visible" : "hidden"}`,
            float: "right",
          }}
        >
          <Dropdown.Item href="#/action-1"></Dropdown.Item>
          <Dropdown.Item
            style={{ color: "#dc3545" }}
            onClick={deleteSelectedIDS}
            href="#/action-2"
          >
            <i class="fa-solid fa-trash-can"></i> <span>Delete Users</span>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={unApproveUser}
            style={{ color: "#f7b539" }}
            href="javascript:void(0)"
          >
            {" "}
            <i class="fa-solid fa-thumbs-down"></i> <span>Disable Users</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            style={{ color: "#2cb042" }}
            onClick={statusHandler}
            href="javascript:void(0)"
          >
            <i class="fa-solid fa-thumbs-up"></i> <span>Enable Users</span>
          </Dropdown.Item>
        </DropdownButton>
        {/* <Button
          style={{
            visibility: `${isCheck.length ? "visible" : "hidden"}`,
            float: "right",
            transition: "0.5s ease",
            fontSize: "15px",
            color: "rgb(220, 53, 69)",
          }}
          onClick={deleteSelectedIDS}
        >
          <i class="fa-solid fa-trash-can" style={{ marginRight: "5px" }}></i>
          Delete
        </Button> */}
        {/* <table className="table table-striped"> */}
        <table className="table " columns={columns}>
          {/* rowSelection={rowSelection} columns={columns} dataSource={data} */}
          <thead>
            <tr>
              <th>
                <Checkbox
                  type="checkbox"
                  id="selectAll"
                  onChange={selectAllUsers}
                  checked={isCheckAll}
                />
              </th>
              <th>Sr no</th>
              <th>Name</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {filteredList(allUsers, search).map((uers, id) => {
              i++;
              return (
                <>
                  <tr className="cursor-pointer">
                    <td>
                      <Checkbox
                        key={id}
                        type="checkbox"
                        id={uers.id}
                        onChange={singleSelect}
                        checked={isCheck.includes(uers.id)}
                      />
                    </td>
                    <td>{i}</td>
                    <td>{uers.name}</td>
                    <td>
                      <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          class="avatar avatar-xs pull-up"
                          title=""
                          data-bs-original-title="Lilian Fuller"
                        >
                          <img
                            src={`${process.env.REACT_APP_IMG_URL}/assets/img/team-1.jpg`}
                            alt="Avatar"
                            class="rounded-circle"
                          />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          class="avatar avatar-xs pull-up"
                          title=""
                          data-bs-original-title="Sophia Wilkerson"
                        >
                          <img
                            src={`${process.env.REACT_APP_IMG_URL}/assets/img/team-2.jpg`}
                            alt="Avatar"
                            class="rounded-circle"
                          />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          class="avatar avatar-xs pull-up"
                          title=""
                          data-bs-original-title="Christina Parker"
                        >
                          <img
                            src={`${process.env.REACT_APP_IMG_URL}/assets/img/marie.jpg`}
                            alt="Avatar"
                            class="rounded-circle"
                          />
                        </li>
                      </ul>
                    </td>
                    <td id={uers.id} key={id}>
                      {uers.email}
                    </td>
                    <td>
                      &nbsp;&nbsp;
                      <a
                        href="#"
                        className=""
                        onClick={() => updateUser(uers.id)}
                        style={{ color: "#0e9aeb" }}
                      >
                        <span className="">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        className=""
                        onClick={() => confirm(uers.id, uers.name)}
                        style={{ color: "#dc3545" }}
                      >
                        <span className="">
                          <i class="fa-solid fa-trash-can"></i>
                        </span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        style={{
                          color: uers.is_Active ? "#f7b539" : "#2cb042",
                        }}
                        onClick={() => unApproveUser(uers.id, uers.is_Active)}
                      >
                        <span>
                          {uers.is_Active == 1 ? (
                            <i class="fa-solid fa-thumbs-down"></i>
                          ) : (
                            <i class="fa-solid fa-thumbs-up"></i>
                          )}
                        </span>
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <EditFieldModel
          open={isModelOpen}
          onCancel={handleCancle}
          userId={userId}
          showUsersHandler={showUsersHandler}
        />
      </div>
    </div>
  );
};

export default UserTable;
