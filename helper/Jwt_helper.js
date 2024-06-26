const jwt = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = { name: "yours ruly" };
      const secret = "some super secret";
      const option = {};
      jwt.sign(payload, sevret, option, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  },
};
