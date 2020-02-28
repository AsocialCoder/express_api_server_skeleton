const mongoose = require("mongoose");
module.exports = mongoose.connect(
  "<connection_url>",
  { useNewUrlParser: true }
);
