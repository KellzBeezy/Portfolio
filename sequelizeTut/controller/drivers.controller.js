import { Driver } from "../models";

async function driverPost(req, res) {
  const { user_id, driver_licence_number, expiring_date, working } = req.body;
  try {
    const driver = await Driver.create({
      user_id,
      driver_licence_number,
      expiring_date,
      working,
    });
    return res.status(200).json(driver);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function driverGet(req, res) {
  try {
    const driver = await Driver.findAll({ include: [User] });
    if (driver.length > 0) {
      res.status(200);
      return res.json(driver);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function driverGetOne(req, res) {
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
}

async function driverUpdate(req, res) {
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
}

async function driverDelete(req, res) {
  try {
    const driver = await Driver.findAll();
    await driver.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Driver",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function driverDeleteOne(req, res) {
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
}

module.exports = {
  driverDelete,
  driverDeleteOne,
  driverGet,
  driverGetOne,
  driverPost,
  driverUpdate,
};
