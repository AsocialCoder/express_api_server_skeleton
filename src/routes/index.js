const users_router = require("./Users_Router");

module.exports = router => {
  const jwtAuth = mechanic.services.jwt.verify;
  const upload = mechanic.services.upload;

  users_router(router, jwtAuth, upload);
};
