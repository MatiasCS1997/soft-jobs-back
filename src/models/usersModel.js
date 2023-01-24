const pool = require("../db/connectionDb");

const bcrypt = require("bcryptjs");

const readUser = async (email) => {
  try {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    resp = await pool.query(consulta, values);
    console.log(resp);
    return resp.rows[0];
  } catch (error) {
    errorServer(res, e);
  }
};

const getUser = async (email) => {
  try {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const result = await pool.query(consulta, values);
    const rowCount = result.rowCount;
    if (!rowCount) return undefined;
    return result.rows[0];
  } catch (error) {
    errorServer(res, e);
  }
};

const usersRegister = async (email, password, rol, lenguage) => {
  console.log("entro a registrar usuario el modelo");
  try {
    const passwordEncriptada = bcrypt.hashSync(password);
    const consulta =
      "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *";
    console.log("consulta modelo", consulta);
    const values = [email, passwordEncriptada, rol, lenguage];
    const result = await pool.query(consulta, values);
    const rowCount = result.rowCount;
    if (!rowCount)
      throw {
        code: 404,
        message: "No se pudo crear el usuario, intentalo nuevamente",
      };
    return result.rows;
  } catch (error) {
    errorServer(res, e);
  }
};

module.exports = {
  getUser,
  usersRegister,
  readUser,
};
