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
// Import function getUsers and getUser from user controller
const { getUsers, getUser, addUsers } = require("../controllers/user");

// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);

module.exports = router;
