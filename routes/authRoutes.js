const express = require("express");
const bcrypt = require("bcryptjs");
const { validEmail, validName, validPassword } = require("../utils/validate");

const router = express.Router();

let users = {};
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);
    const userExist = users.hasOwnProperty(email);
    if (userExist) {
      res.send("user exists");
    }

    if (!validEmail(email)) {
      res.send("invalid email");
    }
    if (!validName(name)) {
      res.send("invalid name");
    }
    if (!validPassword(password)) {
      res.send("invalid password");
    }

    const Epassword = await bcrypt.hash(password, 10);
    console.log("password", Epassword);
    users[email] = { name, password: Epassword };
    res.send("success");
  } catch (e) {
    res.send(e);
  }
});

router.post('/signin',async (req,res)=>{
  try{
const {email,password} = req.body
const userExists = users.hasOwnProperty(email)
if(!userExists){
  res.send("user does not exists")
}
const passMatch = await bcrypt.compare(password,users[email].password)
if(!passMatch){
  res.send("password mismatch")
}
res.send("success")
  }
  
 
  catch(e){
    res.send("error fetching user")
  }
})

module.exports = router;
