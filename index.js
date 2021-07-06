const express = require('express')

const app = express()
const port = 5000

//allow this app to receive incoming json request
app.use(express.json())

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
    },
]

//GET list route: simply send arr of obj todos on your user screen
app.get('/todos', (req, res) => {
    res.send({ data: todos });
})

//GET detail route: send the todo obj, by received id request params
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
})

//POST route: receive json body request, from user input, then push to todos array
app.post('/todo', (req, res) => {
    todos = [...todos, req.body];
    res.send({ data: todos });
})

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
app.patch('/todo/:id', (req, res) => {
    const { id } = req.params;
    todos[id - 1] = { ...todos[id - 1], ...req.body };
    res.send({ data: todos[id - 1] });

})

//DELETE route: delete the todo obj, by received id request params
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id != id);
    res.send({ data: todos });
})

app.listen(port, () => console.log(`Listening on port ${port}!`))