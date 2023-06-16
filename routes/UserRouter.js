const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/all-users", controller.GetAllUsers);
Router.get('/user/:id', controller.GetUser)
Router.get('/user/:email', controller.GetUserByEmail)
Router.get('/user/:username', controller.GetUserByUsername)
Router.put('/update_user/by_id/:userId', controller.UpdateUser)
Router.delete('/delete_user/:userId',controller.DeleteUser)

module.exports = Router;
 