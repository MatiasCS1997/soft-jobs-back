const { errorServer } = require("../helpers/errorServer");
const { getUser } = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const { getJwtToken } = require("../helpers/createToken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUser(email);
    console.log("login", user);

    if (!user) {
      res.status(404).json({
        message: "Error, No haz sido registrado",
        code: 404,
      });

      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Contraseña incorrecta",
        code: 401,
      });
      return;
    }

    const token = await getJwtToken(user);
    res.status(200).json({
      message: `Bienvenido, has iniciado sesion con exito`,
      code: 200,
      token,
    });

    return;
  } catch (e) {
    errorServer(res, e);
  }
};

module.exports = { loginUser };
