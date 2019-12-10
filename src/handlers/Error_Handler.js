module.exports = async (req, res, error) => {
  console.log("Error ", req.path, req.method, error);
  res.send({ success: false, message: error });
};
