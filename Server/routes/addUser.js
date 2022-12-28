module.exports = (app) => {
const userRegister = require("../controllers/addUserController")
app.post("/api/register-user",userRegister.create);
app.post("/api/loginUser",userRegister.findAll);
}
