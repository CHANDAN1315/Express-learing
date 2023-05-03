const fs = require('fs')

function logReqRes(filename) {
   return (req, res, next) => {
   console.log("Hello form middleware1");

      fs.appendFile(
         filename,
         `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,
         (err, data) => {
            next();
         }
      );
   }
}

module.exports = {
   logReqRes,
}

// return res.json({status: "Hello form middleware"}) // to send the res from here not to go further route
   // Note: the changes that we made will remain unchanged through out the route 
   // req.myUserName = "Chandan.dev"

   //Practical ex on request accessing the ip address