const express = require("express");
let router = express.Router();

const {
  Driver,
  Company,
  Login,
  CallCenterAgents,
  RouteStatus,
  Machine,
  Client,
  Location,
  MachineCondition,
  MachineOwner,
  MachineTypes,
  OnlineStatus,
  Status,
  TruckTripStatus,
  Route,
  Payment,
  RoleTypes,
  User,
} = require("../../models");

router.route("/").get((req, res) => {
  res.send("Welcome to PickTech");
});

/**
 * !POST
 * */
/*router.route("/Admin").post(async (req, res) => {
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
router.route("/Drivers").post(async (req, res) => {
  const { user_id, driver_licence_number, expiring_date, working } = req.body;
  try {
    const driver = await Driver.create({
      user_id,
      driver_licence_number,
      expiring_date,
      working,
    });
    return res.status(200).json(driver);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
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
});*/
router.route("/CallCenterAgents").post(async (req, res) => {
  const { first_name, last_name } = req.body;
  try {
    const callCenterAgents = await CallCenterAgents.create({
      first_name,
      last_name,
    });
    return res.status(200).json(callCenterAgents);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
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
/*router.route("/Login").post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await Login.create({
      email,
      password,
    });
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client").post(async (req, res) => {
  const { user_id, payment_type, payment_account } = req.body;
  try {
    const client = await Client.create({
      user_id,
      //payment_type,
      payment_account,
    });
    return res.status(200).json(client);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});*/
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
router.route("/MachineCondition").post(async (req, res) => {
  const { name } = req.body;
  try {
    const machineCondition = await MachineCondition.create({
      name,
    });
    return res.status(200).json(machineCondition);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner").post(async (req, res) => {
  const { machine_id, driver_id, company_id } = req.body;
  try {
    const machineOwner = await MachineOwner.create({
      machine_id,
      driver_id,
      company_id,
    });
    return res.status(200).json(machineOwner);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Machine").post(async (req, res) => {
  const {
    license_plate,
    model,
    year,
    condition_id,
    color,
    keywords,
    description,
  } = req.body;
  try {
    const machine = await Machine.create({
      license_plate,
      model,
      year,
      condition_id,
      color,
      keywords,
      description,
    });
    return res.status(200).json(machine);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineTypes").post(async (req, res) => {
  const { type_name } = req.body;
  try {
    const machineTypes = await MachineTypes.create({
      type_name,
    });
    return res.status(200).json(machineTypes);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/OnlineStatus").post(async (req, res) => {
  const { driver_id, location_id, status } = req.body;
  try {
    const onlineStatus = await OnlineStatus.create({
      driver_id,
      location_id,
      status,
    });
    return res.status(200).json(onlineStatus);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment").post(async (req, res) => {
  const { type_name } = req.body;
  try {
    const payment = await Payment.create({
      type_name,
    });
    return res.status(200).json(payment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Route").post(async (req, res) => {
  const {
    from_location_id,
    to_location,
    driver_id,
    client_id,
    price,
    trip_status_id,
  } = req.body;
  try {
    const route = await Route.create({
      from_location_id,
      to_location,
      driver_id,
      client_id,
      price,
      trip_status_id,
    });
    return res.status(200).json(route);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus").post(async (req, res) => {
  const { start, end, status_id, distance } = req.body;
  try {
    const routeStatus = await RouteStatus.create({
      start,
      end,
      status_id,
      distance,
    });
    return res.status(200).json(routeStatus);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status").post(async (req, res) => {
  const { status_name } = req.body;
  try {
    const status = await Status.create({
      status_name,
    });
    return res.status(200).json(status);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/TruckTripStatus").post(async (req, res) => {
  const { status_id, status_time, status_details } = req.body;
  try {
    const truckTripStatus = await TruckTripStatus.create({
      status_id,
      status_time,
      status_details,
    });
    return res.status(200).json(truckTripStatus);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
/**
 * !GET
 * */

router.route("/Admin").get(async (req, res) => {
  try {
    const admin = await Admin.findAll({ include: [User] });
    if (admin.length > 0) {
      res.status(200);
      return res.json(admin);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/users").get(async (req, res) => {
  try {
    const user = await User.findAll();
    if (user.length > 0) {
      res.status(200);
      return res.json(user);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
  //res.status(200).send("HELLO KELLZ BEEZY!");
});

router.route("/Drivers").get(async (req, res) => {
  try {
    const driver = await Driver.findAll({ include: [User] });
    if (driver.length > 0) {
      res.status(200);
      return res.json(driver);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company").get(async (req, res) => {
  try {
    const company = await Company.findAll();
    if (company.length > 0) {
      res.status(200);
      return res.json(company);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client").get(async (req, res) => {
  try {
    const client = await Client.findAll({ include: [User] });
    if (client.length > 0) {
      res.status(200);
      return res.json(client);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Login").get(async (req, res) => {
  try {
    const login = await Login.findAll({ include: [User] });
    if (login.length > 0) {
      res.status(200);
      return res.json(login);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/CallCenterAgents").get(async (req, res) => {
  try {
    const callCenterAgents = await CallCenterAgents.findAll();
    if (callCenterAgents.length > 0) {
      res.status(200);
      return res.json(callCenterAgents);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RoleTypes").get(async (req, res) => {
  try {
    const roleTypes = await RoleTypes.findAll();
    if (roleTypes.length > 0) {
      res.status(200);
      return res.json(roleTypes);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus").get(async (req, res) => {
  try {
    const routeStatus = await RouteStatus.findAll();
    if (routeStatus.length > 0) {
      res.status(200);
      return res.json(routeStatus);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Machine").get(async (req, res) => {
  try {
    const machine = await Machine.findAll();
    if (machine.length > 0) {
      res.status(200);
      return res.json(machine);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Location").get(async (req, res) => {
  try {
    const location = await Location.findAll();
    if (location.length > 0) {
      res.status(200);
      return res.json(location);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineCondition").get(async (req, res) => {
  try {
    const machineCondition = await MachineCondition.findAll();
    if (machineCondition.length > 0) {
      res.status(200);
      return res.json(machineCondition);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner").get(async (req, res) => {
  try {
    const machineOwner = await MachineOwner.findAll();
    if (machineOwner.length > 0) {
      res.status(200);
      return res.json(machineOwner);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineTypes").get(async (req, res) => {
  try {
    const machineTypes = await MachineTypes.findAll();
    if (machineTypes.length > 0) {
      res.status(200);
      return res.json(machineTypes);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/OnlineStatus").get(async (req, res) => {
  try {
    const onlineStatus = await OnlineStatus.findAll();
    if (onlineStatus.length > 0) {
      res.status(200);
      return res.json(onlineStatus);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status").get(async (req, res) => {
  try {
    const status = await Status.findAll();
    if (status.length > 0) {
      res.status(200);
      return res.json(status);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/TruckTripStatus").get(async (req, res) => {
  try {
    const truckTripStatus = await TruckTripStatus.findAll();
    if (truckTripStatus.length > 0) {
      res.status(200);
      return res.json(truckTripStatus);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Route").get(async (req, res) => {
  try {
    const route = await Route.findAll();
    if (route.length > 0) {
      res.status(200);
      return res.json(route);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment").get(async (req, res) => {
  try {
    const payment = await Payment.findAll();
    if (payment.length > 0) {
      res.status(200);
      return res.json(payment);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

/**
 * !DELETE ALL
 * */
router.route("/Admin").delete(async (req, res) => {
  try {
    const admin = await Admin.findAll();
    await admin.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/CallCenterAgents").delete(async (req, res) => {
  try {
    const callCenterAgents = await CallCenterAgents.findAll();
    await callCenterAgents.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RoleTypes").delete(async (req, res) => {
  try {
    const roleTypes = await RoleTypes.findAll();
    await roleTypes.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Login").delete(async (req, res) => {
  try {
    const login = await Login.findAll();
    await login.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from ClientLogin",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client").delete(async (req, res) => {
  try {
    const client = await Client.findAll();
    await client.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Client",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company").delete(async (req, res) => {
  try {
    //const company = await Company.findAll();
    await Company.destroy({
      where: {},
      truncate: true,
      //force: true,
    });
    return res.status(200).json({
      message: "All records has been deleted successfully from Company",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Drivers").delete(async (req, res) => {
  try {
    const driver = await Driver.findAll();
    await driver.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Driver",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Location").delete(async (req, res) => {
  try {
    const location = await Location.findAll();
    await location.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Location",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineCondition").delete(async (req, res) => {
  try {
    const machineCondition = await MachineCondition.findAll();
    await machineCondition.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from MachineCondition",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner").delete(async (req, res) => {
  try {
    const machineOwner = await MachineOwner.findAll();
    await machineOwner.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from MachineOwner",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Machine").delete(async (req, res) => {
  try {
    const machine = await Machine.findAll();
    await machine.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Machine",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineTypes").delete(async (req, res) => {
  try {
    const machineTypes = await MachineTypes.findAll();
    await machineTypes.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from MachineTypes",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/OnlineStatus").delete(async (req, res) => {
  try {
    const onlineStatus = await OnlineStatus.findAll();
    await onlineStatus.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from OnlineStatus",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment").delete(async (req, res) => {
  try {
    const payment = await Payment.findAll();
    await payment.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Payment",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Route").delete(async (req, res) => {
  try {
    const route = await Route.findAll();
    await route.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Route",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus").delete(async (req, res) => {
  try {
    const routeStatus = await RouteStatus.findAll();
    await routeStatus.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from RouteStatus",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status").delete(async (req, res) => {
  try {
    const status = await Status.findAll();
    await status.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Status",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/TruckTripStatus").delete(async (req, res) => {
  try {
    const truckTripStatus = await TruckTripStatus.findAll();
    await truckTripStatus.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from TruckTripStatus",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
