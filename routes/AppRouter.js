const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const AuthRouter = require("./AuthRouter");
const CommentRouter = require("./CommentRouter");
// const middleware = require("../middleware");





Router.use("/users", UserRouter);
Router.use("/comments", CommentRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;