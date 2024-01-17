const userLogin = require("../models/login");

async function handleLogin(req, res) {
    const body = req.body;

    if (!body || !body.userName || !body.email || !body.password) {
        return res.status(400).json({ msg: "All field should be needed !" })
    }

    const result = await userLogin.create({
        userName: body.userName,
        email: body.email,
        password: body.password
    })

    console.log('result', result);
    return res.status(201).json({ msg: "success!!" })
}

async function handleSignin(req, res) {
    const { email, password } = req.body;
    const user = await userLogin.findOne({ email, password })
    console.log(user)
    if (!user) {
        return res.status(404).json("user not found");
    }
    return res.json("success");
}

module.exports = {handleLogin, handleSignin};