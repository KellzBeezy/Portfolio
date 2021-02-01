const config = require("../../config/config");

function driverAuth(req, res, next) {
  if (
    req.userRole === config.DRIVER ||
    req.userRole === config.ADMIN ||
    req.userRole === config.SUPER_ADMIN
  ) {
    next();
  } else {
    res.status(403).send("not allowed to be here fuck you!");
  }
}
function basicAuth(req, res, next) {
  if (req.userRole === config.CUSTOMER || req.userRole === config.SUPER_ADMIN) {
    next();
  } else {
    res.status(403).send("not allowed to be here fuck you!");
  }
}

function permissions(req, res, next) {
  if (req.userRole === config.SUPER_ADMIN) {
    next();
  } else {
    res.status(403).send("not allowed to be here fuck you!");
  }
}

function adminPermissions(req, res, next) {
  if (req.userRole === config.ADMIN) {
    next();
  } else {
    res.status(403).send("not allowed to be here fuck you!");
  }
}

module.exports = { driverAuth, basicAuth, permissions, adminPermissions };
