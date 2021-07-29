# Insert query with sequelize

- Controller

  > File : `src/controllers/user.js`

  Import db connection and QueryTypes from sequelize :

  ```javascript
  const db = require("../database/connection");
  const { QueryTypes } = require("sequelize");
  ```

  Function addUsers for insert user data to database :

  ```javascript
  exports.addUsers = async (req, res) => {
    try {
      const { email, password, name, status } = req.body;

      const query = `INSERT INTO users (email,password,name,status) VALUES ('${email}','${password}','${name}','${status}')`;

      await db.sequelize.query(query);

      res.send({
        status: "success",
        message: "Add user finished",
        query,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };
  ```

* Route

  > File : `src/routes/index.js`

  Import function addUsers from user controller :

  ```javascript
  const { addUsers } = require("../controllers/user");
  ```

  Router with method post for insert user data :

  ```javascript
  router.post("/user", addUsers);
  ```
