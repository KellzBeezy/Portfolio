const express = require("express");
let router = express.Router();

const {
  Driver,
  Company,
  ClientLogin,
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
} = require("../../models");

/**
 * !UPDATE
 * */

router.route("/").get((req, res) => {
  res.send("Welcome to update");
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

    return res.json({
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

    return res.json({
      callCenterAgents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/ClientLogin/:id").put(async (req, res) => {
  try {
    const { email, password } = req.body;
    const { id } = req.params;
    const clientLogin = await ClientLogin.findOne({
      where: { id },
    });

    clientLogin.email = email;
    clientLogin.password = password;
    await clientLogin.save();

    return res.json({
      clientLogin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client/:id").put(async (req, res) => {
  try {
    const {
      email,
      birth_date,
      phone,
      payment_account,
      payment_type,
      gender,
      last_name,
      first_name,
    } = req.body;
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    client.first_name = first_name;
    client.last_name = last_name;
    client.email = email;
    client.birth_date = birth_date;
    client.phone = phone;
    client.payment_account = payment_account;
    client.payment_type = payment_type;
    client.gender = gender;

    await client.save();

    return res.json({
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

    return res.json({
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
      email,
      birth_date,
      phone,
      working,
      last_name,
      first_name,
      driver_licence_number,
      expiring_date,
    } = req.body;
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
    });

    driver.first_name = first_name;
    driver.birth_date = birth_date;
    driver.email = email;
    driver.last_name = last_name;
    driver.phone = phone;
    driver.working = working;
    driver.driver_licence_number = driver_licence_number;
    driver.expiring_date = expiring_date;

    await driver.save();

    return res.json({
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

    return res.json({
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

    return res.json({
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

    return res.json({
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
    } = req.body;
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    machine.license_plate = license_plate;
    machine.model = model;
    machine.year = year;
    machine.condition_id = condition_id;
    machine.color = color;
    machine.keywords = keywords;
    machine.description = description;
    await machine.save();

    return res.json({
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

    return res.json({
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

    return res.json({
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

    return res.json({
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

    return res.json({
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

    return res.json({
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

    return res.json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
