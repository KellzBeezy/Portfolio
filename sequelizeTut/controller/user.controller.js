import { User } from "../models";

async function userPost(req, res) {
  const {
    first_name,
    last_name,
    gender,
    phone,
    email,
    birth_date,
    role,
  } = req.body;
  try {
    const user = await User.create({
      first_name,
      last_name,
      gender,
      phone,
      email,
      birth_date,
      role,
    });
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function userGet(req, res) {
  try {
    const user = await User.findAll();
    if (user.length > 0) {
      res.status(200);
      return res.json(user);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function userGetOne(req, res) {}
async function userUpdate(req, res) {}
async function userDelete(req, res) {}
async function userDeleteOne(req, res) {}

module.exports = {
  userDelete,
  userDeleteOne,
  userGet,
  userGetOne,
  userPost,
  userUpdate,
};
