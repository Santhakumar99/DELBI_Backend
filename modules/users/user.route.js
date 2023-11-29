const express = require("express");
const router = express.Router();
const {getAllUsers,FindUser,CreateAllUsers,UpdateUser,DeleteUser} = require('./user.controller')
router.get("/AllUsers",  getAllUsers);
router.get("/AllUsers/:id",  FindUser);
router.post("/" ,CreateAllUsers);
router.put("/:id" ,UpdateUser);
router.delete("/delete/:id" ,DeleteUser);
module.exports = router;