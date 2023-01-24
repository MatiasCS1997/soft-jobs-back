const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  const { id, email } = user;

  return new Promise((resolve, reject) => {
    const payload = {
      id,
      email,
    };
    const options = {
      expiresIn: "1h",
    };
    jwt.sign(payload, process.env.JWT_SECRET, options, (err, payload) => {
      if (err) reject(err);
      console.log(payload);
      resolve(payload);
    });
  });
};

module.exports = { getJwtToken };