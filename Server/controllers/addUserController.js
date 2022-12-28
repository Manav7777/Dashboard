const RegisterUser = require("../models/addUserModel.js");

exports.create = (req, res) => {
  const data = req.body;
  console.log(data);
  RegisterUser.create(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// login User Controller Data
exports.findAll = (req, res) => {
  const loginUsersData = {
    email: req.body.email,
    password: req.body.password,
  };
  RegisterUser.loginUserData(loginUsersData, (err, result) => {
    console.log("ERROR: ", err);
    if (err) {
      console.log(err);
      res.status(500).send({
        message: err,
      });
    } else {
      res.status(200).json({ success: true, message: result });
    }
  });
};
