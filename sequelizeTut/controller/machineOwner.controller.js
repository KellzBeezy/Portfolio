import { MachineOwner } from "../models";

async function machineOwnerPost(req, res) {
  const { machine_id, driver_id, company_id } = req.body;
  try {
    const machineOwner = await MachineOwner.create({
      machine_id,
      driver_id,
      company_id,
    });
    return res.status(200).json(machineOwner);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function machineOwnerGet(req, res) {
  try {
    const machineOwner = await MachineOwner.findAll();
    if (machineOwner.length > 0) {
      res.status(200);
      return res.json(machineOwner);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineOwnerGetOne(req, res) {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineOwner,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineOwnerUpdate(req, res) {
  try {
    const { machine_id, driver_id, company_id } = req.body;
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    machineOwner.machine_id = machine_id;
    machineOwner.driver_id = driver_id;
    machineOwner.company_id = company_id;
    machineOwner.available = available;

    await machineOwner.save();

    return res.status(200).json({
      machineOwner,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineOwnerDelete(req, res) {
  try {
    const machineOwner = await MachineOwner.findAll();
    await machineOwner.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from MachineOwner",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineOwnerDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const machineOwner = await MachineOwner.findOne({
      where: { id },
    });

    await machineOwner.destroy();

    return res.status(200).json({
      message: "MachineOwner Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  machineOwnerDelete,
  machineOwnerDeleteOne,
  machineOwnerGet,
  machineOwnerGetOne,
  machineOwnerUpdate,
  machineOwnerPost,
};
