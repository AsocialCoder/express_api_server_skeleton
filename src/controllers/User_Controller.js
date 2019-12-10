const User = require("../models/User_Model");
const _ = require("lodash");

module.exports = {
  get: async (req, res, next) => {
    try {
      const response = await User.find({});
      res.send({ success: true, user: response });
    } catch (error) {
      mechanic.handlers.error_handler(req, res, error);
    }
  },
  post: async (req, res, next) => {
    try {
      const errors = User.schemaValidation(req.body);
      if (!_.isEmpty(errors)) {
        mechanic.handlers.error_handler(req, res, errors);
      } else {
        var user = new User();
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.mail = req.body.mail;
        user.password = req.body.password;
        user.photo = req.file.path;
        const response = await user.save();
        res.send({ success: true, user: response });
      }
    } catch (error) {
      mechanic.handlers.error_handler(req, res, error);
    }
  },
  login: async (req, res, next) => {
    try {
      const errors = User.schemaValidation(req.body);

      if (!_.isEmpty(errors)) {
        mechanic.handlers.error_handler(req, res, errors);
      } else {
        const response = await User.findOne({
          mail: req.body.mail,
          password: req.body.password
        });
        if (response != null) {
          const token = await mechanic.services.jwt.sign(response);
          res.send({
            success: true,
            user: { ...response._doc, token: token }
          });
        } else {
          mechanic.handlers.error_handler(
            req,
            res,
            "Please check your email or password"
          );
        }
      }
    } catch (error) {
      mechanic.handlers.error_handler(req, res, error);
    }
  }
};
