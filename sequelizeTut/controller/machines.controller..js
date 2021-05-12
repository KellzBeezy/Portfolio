import { Machine } from "../models";

async function machinePost(req, res) {
  const {
    license_plate,
    model,
    year,
    condition_id,
    color,
    keywords,
    description,
    points,
  } = req.body;
  try {
    const machine = await Machine.create({
      license_plate,
      model,
      year,
      condition_id,
      color,
      keywords,
      description,
      points,
    });
    return res.status(200).json(machine);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineGet(req, res) {
  try {
    const machine = await Machine.findAll();
    if (machine.length > 0) {
      res.status(200);
      return res.json(machine);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineGetOne(req, res) {
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
}
async function machineUpdate(req, res) {
  try {
    const {
      license_plate,
      model,
      year,
      condition_id,
      color,
      keywords,
      description,
      location_id,
      points,
    } = req.body;
    const { id } = req.params;
    const machine = await Machine.findOne({
      where: { id },
    });

    machine.license_plate = license_plate;
    machine.model = model;
    machine.year = year;
    machine.location_id = location_id;
    machine.condition_id = condition_id;
    machine.color = color;
    machine.keywords = keywords;
    machine.description = description;
    machine.points = points;
    await machine.save();

    return res.status(200).json({
      machine,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineDelete(req, res) {
  try {
    const machine = await Machine.findAll();
    await machine.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Machine",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineDeleteOne(req, res) {
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
}

module.exports = {
  machineDelete,
  machineDeleteOne,
  machineGet,
  machineGetOne,
  machineUpdate,
  machinePost,
};
