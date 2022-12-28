module.exports = (app) => {
    const AdminDashBoard = require("../controllers/showUserinAdminController");
    app.post("/api/totalUsers",AdminDashBoard.findAll);
    app.post("/api/showUser",AdminDashBoard.getUser);
    app.post("/api/updateUser",AdminDashBoard.updateUserByAdmin);
    app.post("/api/deleteuser",AdminDashBoard.deleteUser);
    app.post("/api/deleteSelectedUsers",AdminDashBoard.multipleDeleteUser);
    app.post("/api/unappove",AdminDashBoard.unApporveUserByAdmin);
    app.post("/api/multiStatus",AdminDashBoard.multiStatusHandleByAdmin);
};
