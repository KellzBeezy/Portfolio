import { Status } from "../models";

async function statusPost(req, res) {
  const { status_name } = req.body;
  try {
    const status = await Status.create({
      status_name,
    });
    return res.status(200).json(status);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function statusGet(req, res) {
  try {
    const status = await Status.findAll();
    if (status.length > 0) {
      res.status(200);
      return res.json(status);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function statusGetOne(req, res) {
  try {
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    return res.status(200).json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function statusUpdate(req, res) {
  try {
    const { status_name } = req.body;
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    status.status_name = status_name;

    await status.save();

    return res.status(200).json({
      status,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function statusDelete(req, res) {
  try {
    const status = await Status.findAll();
    await status.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Status",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function statusDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const status = await Status.findOne({
      where: { id },
    });

    await status.destroy();

    return res.status(200).json({
      message: "Status Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  statusDelete,
  statusDeleteOne,
  statusGet,
  statusGetOne,
  statusUpdate,
  statusPost,
};
