const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const port = process.env.PORT || 5000;
const pickTech = require("./routes/superAdmin/pickTech.routes");
const tuts = require("./auth/routes/registration");
const pickTechUpdate = require("./routes/superAdmin/update.routes");
const picTechSpecific = require("./routes/superAdmin/specific.routes");
const driver = require("./routes/driver/driver.routes");
const { verifyToken } = require("./auth/authentication/authenticate");
const {
  driverAuth,
  basicAuth,
  permissions,
  adminPermissions,
} = require("./auth/authentication/authorization");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", tuts);
//app.use("/admin", verifyToken, adminPermissions, admin);

app.use("/picktech", verifyToken, permissions, pickTech);
app.use("/picktech/update", verifyToken, permissions, pickTechUpdate);
app.use("picktech/specific", verifyToken, permissions, picTechSpecific);
//app.use("/basic", verifyToken, basicAuth, common);

//DRIVER ROUTE
app.use("/driver/", verifyToken, driverAuth, driver);

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  await sequelize.sync({
    /*force: true*/
  });
  console.log(" database synced");
});
