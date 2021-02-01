var jwt = require("jsonwebtoken");
var config = require("../../config/sec.config");

//CHECK IF THE USER IS LOGGED IN
function verifyToken(req, res, next) {
  var token = req.headers["lg-access-token"];
  if (!token)
    //{ auth: false, message: "No token provided." }
    return res.status(403).send();

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    req.userRole = decoded.role;

    console.log({ id: req.userId, role: req.userRole });
    next();
  });
}

//CREATE  TOKEN
function createToken(data) {
  var token = jwt.sign(
    { id: data.User.id, role: data.User.role },
    config.secret,
    {
      expiresIn: 86400, // expires in 24 hours
    }
  );
  return token;
}

module.exports = {
  verifyToken,
  createToken,
};
