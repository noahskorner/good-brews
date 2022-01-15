const { Users, } = require("../models");

// Controllers
const getUser = async (req, res) => {
  const userId = req.user.id;

  const user = await Users.findByPk(userId)
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      return res.sendStatus(403);
    });

  return res.status(200).json(user);
};

module.exports = {
  getUser,
};
