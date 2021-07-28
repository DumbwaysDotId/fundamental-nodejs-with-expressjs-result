# Group routes

Group Routes are needed in API development to differentiate a route for API or for standard website link.

- Create folder source `src` inside it have folder `controllers` and `routes`.

- Create `todo.js` file inside `controllers` folder and `index.js` file inside `routes` folder.

---

> File : `src/controllers/todo.js`

Dummy data :

```javascript
let todos = [
   {
       id: 1,
       title: "Cuci tangan",
       isDone: true
   },
   {
       id: 2,
       title: "Jaga jarak",
       isDone: false
   }
]
...
```

Get todos :

```javascript
...
exports.getTodos = async (req, res) => {
  try {
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
...
```

Get todo :

```javascript
...
exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const index = id - 1;
    res.send({
      status: "success",
      data: {
        todo: todos[index],
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
...
```

Add todo :

```javascript
...
exports.addTodo = async (req, res) => {
  try {
    todos = [...todos, req.body];
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
...
```

Update todo :

```javascript
...
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    todos[id - 1] = { ...todos[id - 1], ...req.body };
    res.send({
      status: "success",
      data: {
        todo: todos[id - 1],
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
...
```

Delete todo :

```javascript
...
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id != id);
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
...
```

---

> File : `src/routes/index.js`

```javascript
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

// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;
```

---

> File : `index.js`

```javascript
const express = require("express");

// Get routes to the variabel
const router = require("./src/routes");

const app = express();

const port = 5000;

app.use(express.json());

// Add endpoint grouping and router
app.use("/api/v1/", router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
```

---
