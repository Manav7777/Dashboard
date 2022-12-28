const express = require("express");
const cors = require("cors");

 
const app = express();
 

 
app.use(cors());
app.use(express.json());

// require("./router/userForm_router.js")(app)
require('./routes/addUser')(app)
require('./routes/showUserinAdmin')(app)

 
app.listen(4000, () => console.log('Server running at port 4000'));
