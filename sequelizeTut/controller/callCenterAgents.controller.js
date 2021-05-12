import { CallCenterAgents } from "../models";

async function callCenterAgentsPost(req, res) {
  const { first_name, last_name } = req.body;
  try {
    const callCenterAgents = await CallCenterAgents.create({
      first_name,
      last_name,
    });
    return res.status(200).json(callCenterAgents);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function callCenterAgentsGet(req, res) {
  try {
    const callCenterAgents = await CallCenterAgents.findAll();
    if (callCenterAgents.length > 0) {
      res.status(200);
      return res.json(callCenterAgents);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function callCenterAgentsGetOne(req, res) {
  try {
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    return res.status(200).json({
      callCenterAgents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function callCenterAgentsUpdate(req, res) {
  try {
    const { first_name, last_name } = req.body;
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    callCenterAgents.first_name = first_name;
    callCenterAgents.last_name = last_name;
    await callCenterAgents.save();

    return res.status(200).json({
      callCenterAgents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function callCenterAgentsDelete(req, res) {
  try {
    const callCenterAgents = await CallCenterAgents.findAll();
    await callCenterAgents.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function callCenterAgentsDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const callCenterAgents = await CallCenterAgents.findOne({
      where: { id },
    });

    await callCenterAgents.destroy();

    return res.status(200).json({
      message: "callCenterAgents Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  callCenterAgentsDelete,
  callCenterAgentsDeleteOne,
  callCenterAgentsGet,
  callCenterAgentsGetOne,
  callCenterAgentsPost,
  callCenterAgentsUpdate,
};
