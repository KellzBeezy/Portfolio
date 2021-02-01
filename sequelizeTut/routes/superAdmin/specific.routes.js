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
  res.send("Welcome to specific");
});

router.route("/Admin/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
    });

    await admin.destroy();

    return res.status(200).json({
      message: "Admin Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

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
router.route("/RoleTypes/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    await roleTypes.destroy();

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
router.route("/Client/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    await client.destroy();

    return res.status(200).json({
      message: "Client Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    await company.destroy();

    return res.status(200).json({
      message: "Company Record Deleted",
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
router.route("/Location/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id },
    });

    await location.destroy();

    return res.status(200).json({
      message: "Location Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineCondition/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    await machineCondition.destroy();

    return res.status(200).json({
      message: "MachineCondition Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    await machineOwner.destroy();

    return res.status(200).json({
      message: "MachineOwner Record Deleted",
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
router.route("/MachineTypes/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

    await machineTypes.destroy();

    return res.status(200).json({
      message: "MachineTypes Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/OnlineStatus/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const onlineStatus = await OnlineStatus.findOne({
      where: { id },
    });

    await onlineStatus.destroy();

    return res.status(200).json({
      message: "OnlineStatus Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    await payment.destroy();

    return res.status(200).json({
      message: "Payment Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Route/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findOne({
      where: { id },
    });

    await route.destroy();

    return res.status(200).json({
      message: "Route Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const routeStatus = await RouteStatus.findOne({
      where: { id },
    });

    await routeStatus.destroy();

    return res.status(200).json({
      message: "RouteStatus Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    await status.destroy();

    return res.status(200).json({
      message: "Status Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

/**
 * !GET ONE
 * */
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
router.route("/RoleTypes/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    return res.status(200).json({
      roleTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Client/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
      include: [User],
    });

    return res.status(200).json({
      client,
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
router.route("/Location/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id },
    });

    return res.status(200).json({
      location,
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
router.route("/MachineTypes/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/OnlineStatus/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const onlineStatus = await OnlineStatus.findOne({
      where: { id },
    });

    return res.status(200).json({
      onlineStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    return res.status(200).json({
      payment,
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
router.route("/Status/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    return res.status(200).json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
