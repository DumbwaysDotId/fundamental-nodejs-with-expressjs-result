# Fetching query with sequelize

- Controller

  > File : `src/controllers/user.js`

  Import db connection and QueryTypes from sequelize :

  ```javascript
  const db = require("../database/connection");
  const { QueryTypes } = require("sequelize");
  ```

  Function getUsers for get all user data from database :

  ```javascript
  exports.getUsers = async (req, res) => {
    try {
      const query = "SELECT * FROM users";
      const data = await db.sequelize.query(query, { type: QueryTypes.SELECT });

      res.send({
        status: "success",
        data,
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

  Function getUser for get one user data from database :

  ```javascript
  exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;

      const data = await db.sequelize.query(
        `SELECT * FROM users WHERE id = ${id}`,
        { type: QueryTypes.SELECT }
      );

      res.send({
        status: "success",
        data,
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

  Import function getUsers and getUser from user controller :

  ```javascript
  const { getUsers, getUser } = require("../controllers/user");
  ```

  Router with method get for fetching user data :

  ```javascript
  router.get("/users", getUsers);
  router.get("/user/:id", getUser);
  ```
