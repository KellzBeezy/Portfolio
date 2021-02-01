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

module.exports = router;
