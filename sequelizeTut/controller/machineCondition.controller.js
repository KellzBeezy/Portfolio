import { MachineCondition } from "../models";

async function machineConditionPost(req, res) {
  const { name } = req.body;
  try {
    const machineCondition = await MachineCondition.create({
      name,
    });
    return res.status(200).json(machineCondition);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineConditionGet(req, res) {
  try {
    const machineCondition = await MachineCondition.findAll();
    if (machineCondition.length > 0) {
      res.status(200);
      return res.json(machineCondition);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineConditionGetOne(req, res) {
  try {
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    return res.status(200).json({
      machineCondition,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineConditionUpdate(req, res) {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    machineCondition.name = name;

    await machineCondition.save();

    return res.status(200).json({
      machineCondition,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineConditionDelete(req, res) {
  try {
    const machineCondition = await MachineCondition.findAll();
    await machineCondition.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from MachineCondition",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineConditionDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const machineCondition = await MachineCondition.findOne({
      where: { id },
    });

    await machineCondition.destroy();

    return res.status(200).json({
      message: "MachineCondition Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  machineConditionGet,
  machineConditionGetOne,
  machineConditionPost,
  machineConditionDelete,
  machineConditionUpdate,
  machineConditionDeleteOne,
};
