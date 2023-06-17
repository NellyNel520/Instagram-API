const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const AuthRouter = require("./AuthRouter");
// const middleware = require("../middleware");





Router.use("/users", UserRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;