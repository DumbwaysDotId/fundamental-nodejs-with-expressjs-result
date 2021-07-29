# Update query with sequelize

- Controller

  > File : `src/controllers/user.js`

  Function updateUser for update user data from database :

  ```javascript
  exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;

      const { email, password, name, status } = req.body;

      const query = `UPDATE users 
                        SET email = '${email}', password = '${password}', name = '${name}', status = '${status}'
                        WHERE id = ${id}`;

      await db.sequelize.query(query);

      res.send({
        status: "success",
        message: `Update user id: ${id} finished`,
        data: req.body,
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

  Import function updateUser from user controller :

  ```javascript
  const { ... , updateUser } = require("../controllers/user");
  ```

  Router with method update for fetching user data :

  ```javascript
  router.patch("/user/:id", updateUser);
  ```
