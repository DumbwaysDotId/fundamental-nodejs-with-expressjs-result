# Delete query with sequelize

- Controller

  > File : `src/controllers/user.js`

  Function deleteUser for delete user data from database :

  ```javascript
  exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;

      const query = `DELETE FROM users WHERE id = ${id}`;

      await db.sequelize.query(query);

      res.send({
        status: "success",
        message: `Delete user id: ${id} finished`,
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

  Import function deleteUser from user controller :

  ```javascript
  const { ... , deleteUser } = require("../controllers/user");
  ```

  Router with method delete for delete user data :

  ```javascript
  router.patch("/user/:id", deleteUser);
  ```
