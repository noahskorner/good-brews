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

  if (!user) return res.sendStatus(401);

  const response = user.toJSON();
  delete response.password; //remove password before sending back

  return res.status(200).json(response);
};

module.exports = {
  getUser,
};
