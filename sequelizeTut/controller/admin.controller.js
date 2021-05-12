import { Admin } from "../models";

async function adminPost(req, res) {
  const { user_id, company_id } = req.body;
  try {
    const admin = await Admin.create({
      user_id,
      company_id,
    });
    return res.status(200).json(admin);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function adminGet(req, res) {
  try {
    const admin = await Admin.findAll({ include: [User] });
    if (admin.length > 0) {
      res.status(200);
      return res.json(admin);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function adminUpdate(req, res) {
  try {
    const { user_id, company_id } = req.body;
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
    });

    admin.user_id = user_id;
    admin.company_id = company_id;
    await admin.save();

    return res.status(200).json({
      admin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function adminGetOne(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
      include: [User],
    });

    return res.status(200).json({
      admin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function adminDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findOne({
      where: { id },
    });

    await admin.destroy();

    return res.status(200).json({
      message: "Admin Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function adminDelete(req, res) {
  try {
    const admin = await Admin.findAll();
    await admin.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  adminGet,
  adminGetOne,
  adminPost,
  adminUpdate,
  adminDelete,
  adminDeleteOne,
};
