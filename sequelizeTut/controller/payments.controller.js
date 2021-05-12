import { Payment } from "../models";

async function paymentsPost(req, res) {
  const { type_name } = req.body;
  try {
    const payment = await Payment.create({
      type_name,
    });
    return res.status(200).json(payment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function paymentsGet(req, res) {
  try {
    const payment = await Payment.findAll();
    if (payment.length > 0) {
      res.status(200);
      return res.json(payment);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function paymentsGetOne(req, res) {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    return res.status(200).json({
      payment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function paymentsUpdate(req, res) {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    payment.type_name = type_name;

    await payment.save();

    return res.status(200).json({
      payment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function paymentsDelete(req, res) {
  try {
    const payment = await Payment.findAll();
    await payment.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from Payment",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function paymentsDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
    });

    await payment.destroy();

    return res.status(200).json({
      message: "Payment Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  paymentsDelete,
  paymentsDeleteOne,
  paymentsGet,
  paymentsGetOne,
  paymentsPost,
  paymentsUpdate,
};
