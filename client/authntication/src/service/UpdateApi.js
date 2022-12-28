import axios from "axios";

export const getUserDetails = async (id,name,email) => {
  console.log("innerID", id);
  return await axios
    .post("http://localhost:4000/api/showUser", { id: id ,
  name:name,
email:email})
    
};
