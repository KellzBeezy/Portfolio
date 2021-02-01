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
} = require("../../models");

/**
 * !UPDATE
 * */

router.route("/").get((req, res) => {
  res.send("Welcome to update");
});

router.route("/Admin/:id").put(async (req, res) => {
  try {
    const { user_id, company_id } = req.body;
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
    });

    admin.user_id = user_id;
    admin.company_id = company_id;
    await admin.save();

    return res.status(200).json({
      admin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/TruckTripStatus/:id").put(async (req, res) => {
  try {
    const { status_details } = req.body;
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

    truckTripStatus.status_details = status_details;
    await truckTripStatus.save();

    return res.status(200).json({
      truckTripStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/CallCenterAgents/:id").put(async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    callCenterAgents.first_name = first_name;
    callCenterAgents.last_name = last_name;
    await callCenterAgents.save();

    return res.status(200).json({
      callCenterAgents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RoleTypes/:id").put(async (req, res) => {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    roleTypes.type_name = type_name;

    await roleTypes.save();

    return res.status(200).json({
      roleTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Login/:id").put(async (req, res) => {
  try {
    const { email, password } = req.body;
    const { id } = req.params;
    const login = await Login.findOne({
      where: { id },
    });

    login.email = email;
    login.password = password;
    await login.save();

    return res.status(200).json({
      login,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client/:id").put(async (req, res) => {
  try {
    const { payment_account, payment_type, location_id } = req.body;
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    client.payment_account = payment_account;
    client.payment_type = payment_type;
    client.location_id = location_id;

    await client.save();

    return res.status(200).json({
      client,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company/:id").put(async (req, res) => {
  try {
    const { email, location_id, phone, registerd, name } = req.body;
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    company.name = name;
    company.location_id = location_id;
    company.email = email;
    company.registerd = registerd;
    company.phone = phone;

    await company.save();

    return res.status(200).json({
      company,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Drivers/:id").put(async (req, res) => {
  try {
    const {
      working,
      location_id,
      driver_licence_number,
      expiring_date,
    } = req.body;
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
    });

    driver.working = working;
    driver.driver_licence_number = driver_licence_number;
    driver.expiring_date = expiring_date;
    driver.location_id = location_id;

    await driver.save();

    return res.status(200).json({
      driver,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Location/:id").put(async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id },
    });

    location.name = name;
    location.address = address;
    location.latitude = latitude;
    location.longitude = longitude;

    await location.save();

    return res.status(200).json({
      location,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineCondition/:id").put(async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    machineCondition.name = name;

    await machineCondition.save();

    return res.status(200).json({
      machineCondition,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner/:id").put(async (req, res) => {
  try {
    const { machine_id, driver_id, company_id } = req.body;
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    machineOwner.machine_id = machine_id;
    machineOwner.driver_id = driver_id;
    machineOwner.company_id = company_id;

    await machineOwner.save();

    return res.status(200).json({
      machineOwner,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Machine/:id").put(async (req, res) => {
  try {
    const {
      license_plate,
      model,
      year,
      condition_id,
      color,
      keywords,
      description,
      location_id,
    } = req.body;
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    machine.license_plate = license_plate;
    machine.model = model;
    machine.year = year;
    machine.location_id = location_id;
    machine.condition_id = condition_id;
    machine.color = color;
    machine.keywords = keywords;
    machine.description = description;
    await machine.save();

    return res.status(200).json({
      machine,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineTypes/:id").put(async (req, res) => {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

    machineTypes.type_name = type_name;

    await machineTypes.save();

    return res.status(200).json({
      machineTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/OnlineStatus/:id").put(async (req, res) => {
  try {
    const { driver_id, location_id, status } = req.body;
    const { id } = req.params;
    const onlineStatus = await OnlineStatus.findOne({
      where: { id },
    });

    onlineStatus.driver_id = driver_id;
    onlineStatus.location_id = location_id;
    onlineStatus.status = status;

    await onlineStatus.save();

    return res.status(200).json({
      onlineStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment/:id").put(async (req, res) => {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    payment.type_name = type_name;

    await payment.save();

    return res.status(200).json({
      payment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Route/:id").put(async (req, res) => {
  try {
    const {
      from_location_id,
      to_location,
      driver_id,
      client_id,
      price,
      trip_status_id,
    } = req.body;
    const { id } = req.params;
    const route = await Route.findOne({
      where: { id },
    });

    route.from_location_id = from_location_id;
    route.to_location = to_location;
    route.driver_id = driver_id;
    route.client_id = client_id;
    route.price = price;
    route.trip_status_id = trip_status_id;

    await route.save();

    return res.status(200).json({
      route,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus/:id").put(async (req, res) => {
  try {
    const { start, end, status_id, distance } = req.body;
    const { id } = req.params;
    const routeStatus = await RouteStatus.findOne({
      where: { id },
    });

    routeStatus.start = start;
    routeStatus.end = end;
    routeStatus.status_id = status_id;
    routeStatus.distance = distance;

    await routeStatus.save();

    return res.status(200).json({
      routeStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status/:id").put(async (req, res) => {
  try {
    const { status_name } = req.body;
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    status.status_name = status_name;

    await status.save();

    return res.status(200).json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
