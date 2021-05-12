import { OnlineStatus } from "../models";

async function onlineStatusPost(req, res) {
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
}
async function onlineStatusGet(req, res) {
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
}
async function onlineStatusGetOne(req, res) {
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
}
async function onlineStatusUpdate(req, res) {
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
}
async function onlineStatusDelete(req, res) {
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
}
async function onlineStatusDeleteOne(req, res) {
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
}

module.exports = {
  onlineStatusDelete,
  onlineStatusDeleteOne,
  onlineStatusGet,
  onlineStatusGetOne,
  onlineStatusPost,
  onlineStatusUpdate,
};
