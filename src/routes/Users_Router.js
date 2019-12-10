const users_controller = require("../controllers/User_Controller");

module.exports = (router, jwtAuth, upload) => {
  router
    .post(
      "/users",
      upload.single("photo") /*upload.array('photo', 12)*/,
      users_controller.post
    )
    .get("/users", jwtAuth, users_controller.get)
    .post("/login", users_controller.login);
};
