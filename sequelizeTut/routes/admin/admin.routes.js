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
/* 
  !GET ONE FOR DRIVER PERMISSIONS
  */

router.route("/TruckTripStatus/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

    return res.status(200).json({
      truckTripStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/CallCenterAgents/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    return res.status(200).json({
      callCenterAgents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Drivers/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
      include: [User],
    });

    return res.status(200).json({
      driver,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/MachineOwner/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineOwner,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Machine/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    return res.status(200).json({
      machine,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Route/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findOne({
      where: { id },
    });

    return res.status(200).json({
      route,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/RouteStatus/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const routeStatus = await RouteStatus.findOne({
      where: { id },
    });

    return res.status(200).json({
      routeStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

/* 
  !UPDATE FOR DRIVER PERMISSIONS
  */

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

router.route("/changePassword/").put(async (req, res) => {
  try {
    const { email, password } = req.body;
    //const { email } = req.params;
    const login = await Login.findOne({
      where: { email },
    });

    //login.email = email;
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
/*
!Delete for company admin
*/
router.route("/TruckTripStatus/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

    await truckTripStatus.destroy();

    return res.status(200).json({
      message: "TruckTripStatus Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/CallCenterAgents/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    await callCenterAgents.destroy();

    return res.status(200).json({
      message: "callCenterAgents Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Login/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const login = await Login.findOne({
      where: { id },
    });

    await login.destroy();

    return res.status(200).json({
      message: "Login Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Drivers/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
    });

    await driver.destroy();

    return res.status(200).json({
      message: "Drivers Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Machine/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    await machine.destroy();

    return res.status(200).json({
      message: "Machine Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

/*
  !GET FOR ADMIN
  */

router.route("/Admin/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
      include: [User],
    });

    return res.status(200).json({
      admin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/TruckTripStatus/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

    return res.status(200).json({
      truckTripStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    return res.status(200).json({
      company,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/MachineCondition/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineCondition,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineOwner,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Machine/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    return res.status(200).json({
      machine,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
