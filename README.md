# Routing

Routing in express is pretty straightforward. Make sure you already understand the core concept of REST API like using `GET/POST/PATCH/PUT/DELETE` etc.

API or Application Programming Interface is an interface that can connect one application with another application. Thus, the API acts as an intermediary between different applications, either within the same platform or across platforms.

> File : `index.js`

- `express.json()` this is require to get incoming JSON input from POST :

  ```javascript
  app.use(express.json());
  ```

- Make hardcoded array of obj todos (attribute: id, title, isDone)

* Get list route :

  ```javascript
  app.get("/todos", (req, res) => {
    res.send({ data: todos });
  });
  ```

- GET detail route :

  ```javascript
  app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    res.send(todos[index]);
  });
  ```

- POST route :

  ```javascript
  app.post("/todo", (req, res) => {
    todos = [...todos, req.body];
    res.send({ data: todos });
  });
  ```

- PATCH route :

  ```javascript
  app.patch("/todo/:id", (req, res) => {
    const { id } = req.params;
    todos[id - 1] = { ...todos[id - 1], ...req.body };
    res.send({ data: todos[id - 1] });
  });
  ```

- DELETE route :

  ```javascript
  app.delete("/todo/:id", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id != id);
    res.send({ data: todos });
  });
  ```

- App listen :

  ```javascript
  app.listen(port, () => console.log(`Listening on port ${port}!`));
  ```
