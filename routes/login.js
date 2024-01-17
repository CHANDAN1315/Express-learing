const express = require('express');

const {handleLogin, handleSignin} = require("../controllers/login")

const loginRouter = express();


loginRouter.post("/" , handleLogin);
loginRouter.post("/signin", handleSignin);

module.exports = loginRouter