> First time, install Node.js and NPM on Your PC [link](https://nodejs.org/)

# Make 'Hello Express' with expressjs

`Express JS` is a framework from NodeJS which is designed flexibly and simply to help the back end application development stage.

Add below code to make `Hello Express` :

> File : `index.js`

```javascript
//instantiate express module
const express = require("express");

//use express in app variable
const app = express();

//define the server port
const port = 5000;

//create the homepage route
app.get("/", (req, res) => {
  //res means, response, and it send string "Hello Express!" to the API
  res.send("Hello Express!");
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));
```
