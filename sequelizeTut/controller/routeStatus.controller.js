import { RouteStatus } from "../models";

async function routeStatusPost(req, res) {
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
}
async function routeStatusGet(req, res) {
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
}
async function routeStatusGetOne(req, res) {
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
}
async function routeStatusUpdate(req, res) {
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
}
async function routeStatusDelete(req, res) {
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
}
async function routeStatusDeleteOne(req, res) {
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
}

module.export = {
  routeStatusDelete,
  routeStatusDeleteOne,
  routeStatusGet,
  routeStatusGetOne,
  routeStatusPost,
  routeStatusUpdate,
};
