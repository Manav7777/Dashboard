const AdminDashBoard = require("../models/showUsersinAdminModel.js");

exports.findAll = (req, res) => {
  const data = req.body;
  AdminDashBoard.getAllUsers(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
exports.getUser = (req, res) => {
  const data = req.body;
  AdminDashBoard.getUserDetails(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
exports.updateUserByAdmin = (req, res) => {
  const data = req.body;
  console.log("UpdateData: ", data);
  AdminDashBoard.updateUser(data, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
    } else {
      res.status(200).send(result);
    }
  });
};
exports.deleteUser = (req, res) => {
  const data = req.body;
  console.log("Delete Controller:", data);
  AdminDashBoard.deleteUsers(data, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
    } else {
      res.status(200).send(result);
    }
  });
};
// Multiple Delete Users
exports.multipleDeleteUser=(req,res)=>{
  const deleteUsers = req.body;
  AdminDashBoard.multipleDeleteUsers(deleteUsers,(err,result)=>{
    if(err){
      res.status(500).send({
        message:err
      });
    }else{
      res.status(200).send(result);
    }
  })

}

exports.unApporveUserByAdmin = (req,res) =>{
  const data = req.body;
  
  AdminDashBoard.unapproveUsers(data,(err,result)=>{
    if(err){
      res.status(500).send({
        message:err,
      });
    }else{
      res.status(200).send(result);
    }
  })
}

exports.multiStatusHandleByAdmin = (req,res)=>{
  const data = req.body;
  console.log("DATA:",data)
  AdminDashBoard.multiStatusChanger(data,(err,result)=>{
    if(err){
      res.status(500).send({
        message:err,
      })
    }else{
      res.status(200).send(result);
    }
  })
}