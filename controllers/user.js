const User = require('../models/users')

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    // console.log(req.headers);  

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: 'success' });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: 'success' });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    // console.log(req.body)
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.jobTitle ||
        !body.gender
    ) {
        return res.status(400).json({ msg: "All fields are required..." });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    })

    console.log('result', result);
    return res.status(201).json({ msg: "success", id: result._id });

    /* Used when we are not connected to the database
  
    users.push({ ...body, id: users.length + 1 });
  
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
       return res.status(201).json({ status: 'sucess', id: user.length });
    })
    
    */

}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}