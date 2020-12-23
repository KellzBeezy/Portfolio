const express = require("express");
let router = express.Router();
const { User } = require("../../models");

router.route("/users").get(async (req, res) => {
  try {
    const user = await User.findAll();
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
  //res.status(200).send("HELLO KELLZ BEEZY!");
});

router.route("/users").post(async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//await sequelize.sync({ force: true });

module.exports = router;
