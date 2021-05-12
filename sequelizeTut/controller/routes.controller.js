import { Route } from "../models";

async function routesPost(req, res) {
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
}
async function routesGet(req, res) {
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
}
async function routesGetOne(req, res) {
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
}
async function routesUpdate(req, res) {
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
}
async function routesDelete(req, res) {
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
}
async function routesDeleteOne(req, res) {
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
}

module.exports = {
  routesDelete,
  routesDeleteOne,
  routesGet,
  routesGetOne,
  routesPost,
  routesUpdate,
};
