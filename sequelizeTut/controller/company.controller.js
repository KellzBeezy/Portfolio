import { Company } from "../models";

async function companyPost(req, res) {
  const { name, location_id, phone, email, registerd } = req.body;
  try {
    const company = await Company.create({
      name,
      location_id,
      phone,
      email,
      registerd,
    });
    return res.status(200).json(company);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function companyGet(req, res) {
  try {
    const company = await Company.findAll();
    if (company.length > 0) {
      res.status(200);
      return res.json(company);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function companyGetOne(req, res) {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    return res.status(200).json({
      company,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function companyUpdate(req, res) {
  try {
    const { email, location_id, phone, registerd, name } = req.body;
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    company.name = name;
    company.location_id = location_id;
    company.email = email;
    company.registerd = registerd;
    company.phone = phone;

    await company.save();

    return res.status(200).json({
      company,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function companyDelete(req, res) {
  try {
    //const company = await Company.findAll();
    await Company.destroy({
      where: {},
      truncate: true,
      //force: true,
    });
    return res.status(200).json({
      message: "All records has been deleted successfully from Company",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function companyDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });

    await company.destroy();

    return res.status(200).json({
      message: "Company Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  companyDelete,
  companyDeleteOne,
  companyGet,
  companyGetOne,
  companyUpdate,
  companyPost,
};
