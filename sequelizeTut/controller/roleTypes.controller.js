import { RoleTypes } from "../models";

async function roleTypesPost(req, res) {
  const { type_name } = req.body;
  try {
    const roleTypes = await RoleTypes.create({
      type_name,
    });
    return res.status(200).json(roleTypes);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function roleTypesGet(req, res) {
  try {
    const roleTypes = await RoleTypes.findAll();
    if (roleTypes.length > 0) {
      res.status(200);
      return res.json(roleTypes);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function roleTypesGetOne(req, res) {
  try {
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    return res.status(200).json({
      roleTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function roleTypesUpdate(req, res) {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    roleTypes.type_name = type_name;

    await roleTypes.save();

    return res.status(200).json({
      roleTypes,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function roleTypesDelete(req, res) {
  try {
    const roleTypes = await RoleTypes.findAll();
    await roleTypes.destroy();
    return res.status(200).json({
      message:
        "All records has been deleted successfully from CallCenterAgents",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function roleTypesDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const roleTypes = await RoleTypes.findOne({
      where: { id },
    });

    await roleTypes.destroy();

    return res.status(200).json({
      message: "callCenterAgents Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  roleTypesDelete,
  roleTypesDeleteOne,
  roleTypesGet,
  roleTypesGetOne,
  roleTypesPost,
  roleTypesUpdate,
};
