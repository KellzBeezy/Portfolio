import { MachineTypes } from "../models";

async function machineTypesPost(req, res) {
  const { type_name } = req.body;
  try {
    const machineTypes = await MachineTypes.create({
      type_name,
    });
    return res.status(200).json(machineTypes);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineTypesGet(req, res) {
  try {
    const machineTypes = await MachineTypes.findAll();
    if (machineTypes.length > 0) {
      res.status(200);
      return res.json(machineTypes);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineTypesGetOne(req, res) {
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
}
async function machineTypesUpdate(req, res) {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const machineTypes = await MachineTypes.findOne({
      where: { id },
    });

    machineTypes.type_name = type_name;

    await machineTypes.save();

    return res.status(200).json({
      machineTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineTypesDelete(req, res) {
  try {
    const machineTypes = await MachineTypes.findAll();
    await machineTypes.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from MachineTypes",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineTypesDeleteOne(req, res) {
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
}

module.exports = {
  machineTypesDelete,
  machineTypesDeleteOne,
  machineTypesGet,
  machineTypesGetOne,
  machineTypesPost,
  machineTypesUpdate,
};
