const res = require("express/lib/response");
const Sql = require("../config/dataBase");
const RegisterUser = function (data) {
  this.name = data.name;
  this.email = data.email;
  this.password = data.password;
  this.confirmpass = data.confirmpass;
};

RegisterUser.create = (req, result) => {
  console.log("Model:" + JSON.stringify(req));
  let userRegisterDataList = {
    name: req.name,
    email: req.email,
    password: req.password,
    confirmpass: req.confirmpass,
    role:2,
  };
  console.log(userRegisterDataList);

  Sql.query(
    "INSERT INTO registeruser SET ?",
    [userRegisterDataList],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

RegisterUser.loginUserData = (loginUsersData, result) => {
  console.log("loginUsersData: ", loginUsersData);
  let loginUserEmail = loginUsersData.email;
  let loginUserPassword = loginUsersData.password;
  console.log(loginUserEmail, loginUserPassword);

  if (loginUserEmail && loginUserPassword) {
    Sql.query(
      "SELECT * FROM registeruser WHERE email = ? AND password =  ? ",
      [loginUserEmail, loginUserPassword],
      (err, res) => {
        if (err) throw err;
        if (res.length > 0) {
          result(null, res[0]);
        } else {
          result("Incorrect Username and/or Password!");
        }
      }
    );
  } else {
    result("Please Complete Your Registration");
  }
};

module.exports = RegisterUser;
