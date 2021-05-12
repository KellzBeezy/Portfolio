import { Client } from "../models";

async function clientPost(req, res) {
  const { user_id, payment_type, payment_account } = req.body;
  try {
    const client = await Client.create({
      user_id,
      //payment_type,
      payment_account,
    });
    return res.status(200).json(client);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function clientGet(req, res) {
  try {
    const client = await Client.findAll({ include: [User] });
    if (client.length > 0) {
      res.status(200);
      return res.json(client);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function clientGetOne(req, res) {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
      include: [User],
    });

    return res.status(200).json({
      client,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function clientUpdate(req, res) {
  try {
    const { payment_account, payment_type, location_id } = req.body;
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    client.payment_account = payment_account;
    client.payment_type = payment_type;
    client.location_id = location_id;

    await client.save();

    return res.status(200).json({
      client,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function clientDelete(req, res) {
  try {
    const client = await Client.findAll();
    await client.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Client",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function clientDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: { id },
    });

    await client.destroy();

    return res.status(200).json({
      message: "Client Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  clientDelete,
  clientDeleteOne,
  clientGet,
  clientGetOne,
  clientPost,
  clientUpdate,
};
