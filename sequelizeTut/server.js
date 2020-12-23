const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const port = process.env.PORT || 5000;
const pickTech = require("./routes/pickTech/pickTech.routes");
const tuts = require("./routes/tut/tut.routes");
const pickTechUpdate = require("./routes/pickTech/update.routes");
const picTechSpecific = require('./routes/pickTech/specific.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/learn/seqTut", tuts);
app.use("/picktech/dbApi", pickTech);
app.use("/dbApi/update", pickTechUpdate);
app.use("/dbApi/update", picTechSpecific);

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  await sequelize.sync({ force: true });
  console.log(" database synced");
});
