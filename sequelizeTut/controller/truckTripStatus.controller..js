import { TruckTripStatus } from "../models";

async function truckTripStatusPost(req, res) {
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
}
async function truckTripStatusGet(req, res) {
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
}
async function truckTripStatusGetOne(req, res) {
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
}
async function truckTripStatusUpdate(req, res) {
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
}
async function truckTripStatusDelete(req, res) {
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
}
async function truckTripStatusDeleteOne(req, res) {
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
}

module.exports = {
  truckTripStatusDelete,
  truckTripStatusDeleteOne,
  truckTripStatusGet,
  truckTripStatusGetOne,
  truckTripStatusPost,
  truckTripStatusUpdate,
};
