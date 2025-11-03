const express = require("express");
const { signUp, logIn, logOut } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", logIn);
authRouter.get("/logout", logOut);

module.exports = authRouter;
