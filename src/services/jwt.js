const jwt = require("jsonwebtoken");

module.exports = {
  sign: async user =>
    new Promise((resolve, reject) => {
      console.log(mechanic.config.jwt.access.secret);
      jwt.sign(
        {
          email: user.email,
          userId: user._id
        },
        mechanic.config.jwt.access.secret,
        mechanic.config.jwt.access.options,
        (error, encoded) => (error ? reject(error) : resolve(encoded))
      );
    }),
  verify: (req, res, next) => {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(" ")[1],
        mechanic.config.jwt.access.secret
      );
      req.user = decoded;
      return next();
    } catch (error) {
      mechanic.handlers.error_handler(req, res, "Auth failed");
    }
  }
};
