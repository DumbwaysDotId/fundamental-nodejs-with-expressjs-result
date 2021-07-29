const express = require("express");

const router = express.Router();

// Controller
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");
// Import function updateUser from user controller
const {
  getUsers,
  getUser,
  addUsers,
  updateUser,
} = require("../controllers/user");

// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
// Router with method patch for update user data
router.patch("/user/:id", updateUser);

module.exports = router;
