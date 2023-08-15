const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "sajal") {
    console.log("authorized");
    req.user = { name: "John" };
    next();
  } else {
    res.status(401).send("Unauthorised");
  }
};

module.exports = authorize;
