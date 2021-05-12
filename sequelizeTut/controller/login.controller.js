import { Login } from "../models";

async function loginPost(req, res) {
  const { email, password } = req.body;
  try {
    const login = await Login.create({
      email,
      password,
    });
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function loginGet(req, res) {
  try {
    const login = await Login.findAll({ include: [User] });
    if (login.length > 0) {
      res.status(200);
      return res.json(login);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function loginGetOne(req, res) {
  try {
    const { id } = req.params;
    const login = await Login.findOne({
      where: { id },
    });
    return res.status(200).json({ login });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    const login = await Login.findOne({
      where: { email },
      include: [User],
    });

    if (login) {
      console.log(login);
      var passwordIsValid = bcrypt.compareSync(password, login.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          token: null,
          massage: "email or password is incorrect!",
        });
      } else {
        const token = createToken(login);
        return res.status(200).json({ token, login });
      }
    } else {
      res.status(404).send({
        auth: `Not found login credentials with id ${req.body.email}.`,
        message: "email or password is incorrect!",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function loginUpdate(req, res) {
  try {
    const { email, password } = req.body;
    const { id } = req.params;
    const login = await Login.findOne({
      where: { id },
    });

    login.email = email;
    login.password = password;
    await login.save();

    return res.status(200).json({
      login,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function loginDelete(req, res) {
  try {
    const login = await Login.findAll();
    await login.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from ClientLogin",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function loginDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const login = await Login.findOne({
      where: { id },
    });

    await login.destroy();

    return res.status(200).json({
      message: "Login Record Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  loginDelete,
  loginDeleteOne,
  loginGet,
  loginGetOne,
  loginPost,
  loginUpdate,
  signIn,
};
