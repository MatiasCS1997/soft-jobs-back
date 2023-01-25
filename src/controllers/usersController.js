const { usersRegister, readUser } = require("../models/usersModel");

const postUsers = async (req, res) => {
  console.log("entro a post user el controler");
  try {
    const { email, password, rol, lenguage } = req.body;
    const newUser = await usersRegister(email, password, rol, lenguage);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const email = req.user["email"];
    const resp = await readUser(email);
    res.json(resp);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los datos, vuelve a intentarlo" });
  }
};

module.exports = { postUsers, getAllUsers };