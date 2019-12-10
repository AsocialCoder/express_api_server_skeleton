const mongoose = require("mongoose");
const _ = require("lodash");
const Is = require("is_js");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },

  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String
  }
});

UserSchema.statics.schemaValidation = payload => {
  const errors = [];
  if (Is.falsy(payload.mail)) {
    errors.push({
      message: "E-mail can not be blank"
    });
  }
  if (Is.not.email(payload.mail)) {
    errors.push({
      message: "E-mail is not valid."
    });
  }
  return errors;
};

module.exports = mongoose.model("user", UserSchema);
