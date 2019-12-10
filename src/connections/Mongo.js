const mongoose = require("mongoose");
module.exports = mongoose.connect(
  "mongodb+srv://<Username>:<Password>@db-5htnr.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
