
const express = require("express");

const router = express();
const {
   handleGetAllUsers, 
   handleGetUserById, 
   handleUpdateUserById, 
   handleDeleteUserById,
   handleCreateNewUser
} = require('../controllers/user');
// REST api

router.get('/', handleGetAllUsers).post("/", handleCreateNewUser);



router
   .route("/:id")
   .get(handleGetUserById)
   .patch(handleUpdateUserById)
   .delete(handleDeleteUserById)

module.exports = router;