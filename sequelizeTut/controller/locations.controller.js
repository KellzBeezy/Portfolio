import { Location } from "../models";

async function locationPost(req, res) {
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
}

async function locationGet(req, res) {
  try {
    const location = await Location.findAll();
    if (location.length > 0) {
      res.status(200);
      return res.json(location);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function locationGetOne(req, res) {
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
}

async function locationUpdate(req, res) {
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
}

async function locationDelete(req, res) {
  try {
    const location = await Location.findAll();
    await location.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Location",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function locationDeleteOne(req, res) {
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
}

module.exports = {
  locationDelete,
  locationDeleteOne,
  locationGet,
  locationGetOne,
  locationPost,
  locationUpdate,
};
