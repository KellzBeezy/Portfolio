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

router.route("/").get((req, res) => {
  res.send("Welcome to specific");
});

router.route("/TruckTripStatus/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

    await truckTripStatus.destroy();

    return res.json({
      message: "TruckTripStatus Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/CallCenterAgents/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    await callCenterAgents.destroy();

    return res.json({
      message: "callCenterAgents Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/ClientLogin/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const clientLogin = await ClientLogin.findOne({
      where: { id },
    });

    await clientLogin.destroy();

    return res.json({
      message: "clientLogin Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Client/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    await client.destroy();

    return res.json({
      message: "Client Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Company/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    await company.destroy();

    return res.json({
      message: "Company Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Drivers/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
    });

    await driver.destroy();

    return res.json({
      message: "Drivers Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Location/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id },
    });

    await location.destroy();

    return res.json({
      message: "Location Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineCondition/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    await machineCondition.destroy();

    return res.json({
      message: "MachineCondition Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineOwner/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    await machineOwner.destroy();

    return res.json({
      message: "MachineOwner Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Machine/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    await machine.destroy();

    return res.json({
      message: "Machine Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/MachineTypes/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

    await machineTypes.destroy();

    return res.json({
      message: "MachineTypes Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/OnlineStatus/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const onlineStatus = await OnlineStatus.findOne({
      where: { id },
    });

    await onlineStatus.destroy();

    return res.json({
      message: "OnlineStatus Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Payment/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    await payment.destroy();

    return res.json({
      message: "Payment Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/Route/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findOne({
      where: { id },
    });

    await route.destroy();

    return res.json({
      message: "Route Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/RouteStatus/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const routeStatus = await RouteStatus.findOne({
      where: { id },
    });

    await routeStatus.destroy();

    return res.json({
      message: "RouteStatus Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.route("/Status/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    await status.destroy();

    return res.json({
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

router.route("/TruckTripStatus/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const truckTripStatus = await TruckTripStatus.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const clientLogin = await ClientLogin.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

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
    const { id } = req.params;
    const onlineStatus = await OnlineStatus.findOne({
      where: { id },
    });

    return res.json({
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
    const { id } = req.params;
    const route = await Route.findOne({
      where: { id },
    });

    return res.json({
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

    return res.json({
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

    return res.json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
