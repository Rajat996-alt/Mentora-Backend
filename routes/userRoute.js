const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const { getCurrentUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/currentuser", userAuth, getCurrentUser);

module.exports = userRouter;
