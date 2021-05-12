import { MachineModels, MachineTypes } from "../models";
const fs = require("fs");

async function machineModelsPost(req, res) {
  const { modelName, machineType } = req.body;
  const files = req.files;

  try {
    if (file == undefined) {
      return res.send(`You must select a file.`);
    }
    files.map(async (file) => {
      const machineModels = await MachineModels.create({
        modelName,
        Imagename: file.originalname,
        Imagepath: file.path,
        Imagedata: fs.readFileSync(
          __dirname + "\\images\\" + file.originalname.toLowerCase()
        ),
        machineType,
      });
      if (machineModels) {
        fs.unlink(`${__dirname}\\..\\temp\\${file.org}`, (err) => {
          if (err) console.log(err);
        });
      }
    });
    return res.status(200).json(machineModels);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function machineModelsGet(req, res) {
  try {
    const machineModels = await MachineModels.findAll();
    if (machineModels.length > 0) {
      res.status(200);
      return res.json(machineModels);
    } else return res.status(404).json({ message: "no records found!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineModelsGetOne(req, res) {
  try {
    const { name } = req.params;
    const machineModels = await MachineModels.findOne({
      where: { modelName: name },

      include: [MachineTypes],
    });

    return res.status(200).json({
      machineModels,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineModelsUpdate(req, res) {
  try {
    const { type_name } = req.body;
    const { id } = req.params;
    const machineModels = await MachineModels.findOne({
      where: { id },
    });

    machineModels.type_name = type_name;

    await machineModels.save();

    return res.status(200).json({
      machineModels,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineModelsDelete(req, res) {
  try {
    const machineModels = await MachineModels.findAll();
    await machineModels.destroy();
    return res.status(200).json({
      message: "All records has been deleted successfully from MachineModels",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
async function machineModelsDeleteOne(req, res) {
  try {
    const { id } = req.params;
    const machineModels = await MachineModels.findOne({
      where: { id },
    });

    await machineModels.destroy();

    return res.status(200).json({
      message: "MachineModels Record deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  machineModelsDelete,
  machineModelsDeleteOne,
  machineModelsGet,
  machineModelsGetOne,
  machineModelsPost,
  machineModelsUpdate,
};
