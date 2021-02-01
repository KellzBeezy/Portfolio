const express = require("express");
const { createToken } = require("../authentication/authenticate");
var bcrypt = require("bcryptjs");
let router = express.Router();
const {
  User,
  Location,
  Client,
  Driver,
  Company,
  Login,
  Admin,
  RoleTypes,
} = require("../../models");

router.route("/RoleTypes").post(async (req, res) => {
  const { type_name } = req.body;
  try {
    const roleTypes = await RoleTypes.create({
      type_name,
    });
    return res.status(200).json(roleTypes);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//CREATE THE USERS BASIC INFO AND BRANCH THEM TO EITHER DRIVERS,CLIENTS OR ADMINS
router.route("/users").post(async (req, res) => {
  const {
    first_name,
    last_name,
    gender,
    phone,
    email,
    birth_date,
    role,
  } = req.body;
  try {
    const user = await User.create({
      first_name,
      last_name,
      gender,
      phone,
      email,
      birth_date,
      role,
    });
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
///CREATE A CLIENT
router.route("/Client").post(async (req, res) => {
  const { user_id, payment_type, payment_account, location_id } = req.body;
  try {
    const client = await Client.create({
      user_id,
      payment_type,
      payment_account,
      location_id,
    });
    return res.status(200).json(client);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//CREATE AN ADMIN
router.route("/Admin").post(async (req, res) => {
  const { user_id, company_id } = req.body;
  try {
    const admin = await Admin.create({
      user_id,
      company_id,
    });
    return res.status(200).json(admin);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//CREATE A DRIVER
router.route("/Drivers").post(async (req, res) => {
  const {
    user_id,
    location_id,
    driver_licence_number,
    expiring_date,
    working,
  } = req.body;
  try {
    const driver = await Driver.create({
      user_id,
      driver_licence_number,
      expiring_date,
      location_id,
      working,
    });
    return res.status(200).json(driver);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//ENABLE USERS TO LOGIN IN FUTURE
router.route("/Login").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    finalPassword = await bcrypt.hash(password, 10);
    const login = await Login.create({
      email,
      password: finalPassword,
    });

    const access = await Login.findOne({ where: { email }, include: [User] });

    //CREATE TOKEN
    const token = createToken(access);
    return res.status(200).json({ token, login });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//CREATE A COMPANY
router.route("/Company").post(async (req, res) => {
  const { name, location_id, phone, email, registerd } = req.body;
  try {
    const company = await Company.create({
      name,
      location_id,
      phone,
      email,
      registerd,
    });
    return res.status(200).json(company);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//CREATE A LOCATION WHERE THE USER OR COMPANY IS BASED
router.route("/Location").post(async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  try {
    const location = await Location.create({
      name,
      address,
      latitude,
      longitude,
    });
    return res.status(200).json(location);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//LOGIN
router.route("/Alogin/").post(async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await Login.findOne({
      where: { email },
      include: [User],
    });

    if (login) {
      console.log(login);
      var passwordIsValid = bcrypt.compareSync(password, login.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          token: null,
          massage: "email or password is incorrect!",
        });
      } else {
        const token = createToken(login);
        return res.status(200).json({ token, login });
      }
    } else {
      res.status(404).send({
        auth: `Not found login credentials with id ${req.body.email}.`,
        message: "email or password is incoreect!",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//await sequelize.sync({ force: true });

module.exports = router;
