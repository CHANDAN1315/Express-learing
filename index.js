
// const http = require('http')
/* Why do we need Express ?*/
const express = require('express')
const app = express()
const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/user')
const port = 8000
const {logReqRes} = require('./middlware')  // we dont have to write the index in the route it is bydefault understood by express

// Conneting the node with the database
connectMongoDb('mongodb://127.0.0.1:27017/chandanK-db').then(() => console.log('MongoDB connected'))


// Schema

// Model creation



//Middlware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes('log.txt'));

// The validation are done inside middlewere

app.use('/api/users', userRouter);

app.listen(port, () => { `Port is running at ${port}` });


/*
app.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name} from Home Page`)
})

app.get('/about', (req, res)=>{
  return res.send("Hello form about Page");
})

// const myServer = http.createServer(app);

// myServer.listen(port, ()=> {console.log(`Example app listening on port ${port}`)})
//The above two line code is complied to app.listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/




// L-2 Versioning

/* ^4.18.2
    2 -> minor fixes work not effect that much 
    18 -> recommended fixes
    4 -> Major change (not recommended to change in existing project but can be used for new project)

    ^ -> fix the major and update the recommended and minor
    ~ -> fix major and recommended and change minor.

    Note : dont use latest keyword in versions.

    
    */





/*
L3-4 RestFull api

RestFull api are set of rules, standers and best practices

- When a client ask the server to send response the server can send it in html , json, img , audio formate data
- Let say the server send the data in form of html then it is server side rendring
- 

Rules for restfull api
1. Follow Clinte server architecture
2.Always respect all http method : GET , PUT , POST, PATCH, DELETE
- to send json response we send  res.json(....) insted of res.send(....)

note : HTML rendring is faster than json rendring :-> server side rendring (ssr)
      if the response is send as json the we do clinte side rendring (csr) done the js engine

*/


// const users = require('./MOCK_DATA.json');

// app.get('/users', async (req, res) => {
//    // return res.json(user); this will send the json response to client and this is client side rendring
//    const allDbUsers = await User.find({})
//    const html = `
//   <ul>
//     ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//   </ul>
//   `;
//    res.send(html);
//    // This will send html response which is termed as server side rendring
// })



// // REST api

// app.get('/api/users/', async (req, res) => {
//    const allDbUsers = await User.find({});
//    return res.json(allDbUsers)
// })

// app.post("/api/users", async (req, res) => {
//    const body = req.body;
//    if (
//       !body ||
//       !body.firstName ||
//       !body.lastName ||
//       !body.email ||
//       !body.jobTitle ||
//       !body.gender
//    ) {
//       return res.status(400).json({ msg: "All fields are required..." });
//    }

//    const result = await User.create({
//       firstName: body.firstName,
//       lastName: body.lastName,
//       email: body.email,
//       jobTitle: body.jobTitle,
//       gender: body.gender
//    })

//    console.log('result', result);
//    return res.status(201).json({ msg: "success" });

//    /* Used when we are not connected to the database

//    users.push({ ...body, id: users.length + 1 });

//    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//       return res.status(201).json({ status: 'sucess', id: user.length });
//    })
   
//    */
// });


// app
//    .route("/api/users/:id")
//    .get(async (req, res) => {
//       // const id = Number(req.params.id);
//       // const user = users.find((user) => user.id === id);
//       // console.log(req.headers);  
 
//       const user = await User.findById(req.params.id);
//       if (!user) return res.status(404).json({ error: "user not found" })
//       return res.json(user);
//    })
//    .post((req, res) => {
//       //Todo
//       return res.json({ status: "Pending" });
//    })
//    .patch(async (req, res) => {
//       await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"});
//       return res.json({status: 'success'});
//    })
//    .delete(async(req, res) => {
//       await User.findByIdAndDelete(req.params.id)
//       return res.json({status: 'success'});
//    })


// app.delete("/api/users/:id", (req, res) => {
//    const { id } = req.params;
//    console.log(id);
//    return res.json({ status: 'success' })
// })

