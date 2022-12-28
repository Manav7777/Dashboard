import React, { useEffect } from "react";
import { Modal } from "antd";
import EditUserForm from "../pages/EditUserForm";
// import axios from "axios";

const EditFieldModel = (props) => {


  let handleOk = (arg) => console.log("arg", arg);

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={props.open}
        onCancel={props.onCancel}
        onOk={handleOk}
        footer={null}
      >
        <EditUserForm user={props.userId} showUsersHandler={props.showUsersHandler} onCancel={props.onCancel}/>
      </Modal>
    </div>
  );
};

export default EditFieldModel;
