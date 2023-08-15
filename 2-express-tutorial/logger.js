const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  console.log({ url, method });
  next(); // PASSING TO NEXT FUNCTION WHERE RESPONSE IS BEING SENT
};

module.exports = logger;
