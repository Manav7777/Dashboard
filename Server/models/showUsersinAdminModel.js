const res = require("express/lib/response");
const Sql = require("../config/dataBase");

const AdminDashBoard = function (data) {
  this.name = data.name;
  this.email = data.email;
  this.password = data.password;
  this.confirmpass = data.confirmpass;
};

AdminDashBoard.getAllUsers = (req, res) => {
  Sql.query("SELECT * FROM registeruser", (err, result) => {
    if (err) {
      res(err, null);
    } else {
      return res(null, result);
    }
  });
};
AdminDashBoard.getUserDetails = (req, res) => {
  console.log("id:", req.id);
  Sql.query(
    "SELECT * FROM registeruser WHERE id = ? ",
    req.id,
    (err, result) => {
      if (err) {
        res(err, null);
      } else {
        console.log(result.length);
        if (result.length > 0) {
          res(null, result[0]);
        } else {
          res(null);
        }
      }
    }
  );
};

AdminDashBoard.updateUser = async (req, res) => {
  console.log("resPonseModel: ", req);
  console.log("resId: ", req.id);
  let updatedValues = {
    name: req.name,
    email: req.email,
  };
  let selectedId = {
    id: req.id,
  };
  console.log("SelectID: ", selectedId);


  Sql.query(
    "UPDATE registeruser SET ? WHERE ?",
    [updatedValues, selectedId],
    (err, result) => {
      if (err) {
        console.log(err)
      } 
      else {
        res(null, result);
      }
    }
  );
};


AdminDashBoard.deleteUsers = (req,res) =>{
  console.log("res",res)
  console.log("Delete ID: ",req.id)
  Sql.query("DELETE FROM registeruser WHERE id = ? ",req.id,(err,result)=>{
    if (err) throw err;
    else{
      res(null,result)
    }
  })
}
AdminDashBoard.multipleDeleteUsers=(req,res)=>{
  console.log("ids",req.id)
  console.log("Active",req.is_Active)
  Sql.query("DELETE FROM registeruser WHERE id IN (?)",[req.id],(err,result)=>{
    if(err) {
     console.log(err)
    }
    else{
      res(null,result)
    }
  })
}

AdminDashBoard.unapproveUsers = (req,res) =>{
  console.log(req)
  console.log("Active",req.is_Active)
  Sql.query("UPDATE registeruser SET is_Active = ? WHERE id IN (?)  ",[req.is_Active,req.id],(err,result)=>{
    if(err) throw err;
    else{
      res(null,result);
    }
  })
}

AdminDashBoard.multiStatusChanger = (req,res) =>{
  Sql.query("UPDATE registeruser SET is_Active = (?) WHERE id IN (?)",[req.is_Active,req.id],(err,result)=>{
    if(err) throw err;
    else{
      res(null,result);
    }
  })
}

module.exports = AdminDashBoard;
