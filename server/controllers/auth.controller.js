const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users, RefreshTokens } = require("../models");

// Variables
const usernameRegex = /^[a-z0-9-_\.]+$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const accessTokenExpiration = 900; // 15 minutes;
const refreshTokenExpiration = "15 days";

// Functions
const validateUser = async (username, email, password1, password2) => {
  const fieldErrors = {
    username: [],
    email: [],
    password1: [],
    password2: [],
  };

  // validate username
  if (!username) {
    fieldErrors.username.push("Must provide a username.");
  } else {
    if (username.length < 5 || username.length > 25)
      fieldErrors.username.push("Username must be 5 - 25 characters long.");

    if (!usernameRegex.test(username)) {
      fieldErrors.username.push(
        "Username can only contain letters, numbers, hypens, underscores, and periods."
      );
    }

    const findUsername = await Users.findAll({
      where: {
        username,
      },
      raw: true,
    })
      .then((data) => data)
      .catch((error) => {
        console.log(error);
        fieldErrors.username.push(
          "An unexpected error has occured. Please try again."
        );
        return fieldErrors;
      });

    if (findUsername.length)
      fieldErrors.username.push("User with that username already exists.");
  }

  // validate email
  if (!emailRegex.test(email)) {
    fieldErrors.email.push("Email must be valid.");
  } else {
    const findEmail = await Users.findAll({
      where: {
        email,
      },
      raw: true,
    })
      .then((data) => data)
      .catch((error) => {
        console.log(error);
        fieldErrors.email.push(
          "An unexpected error has occured. Please try again."
        );
        return fieldErrors;
      });

    if (findEmail.length)
      fieldErrors.email.push("User with that email already exists.");
  }

  // validate password
  if (!password1) {
    fieldErrors.password1.push("Must provide a password.");
  } else {
    if (password1.length < 8)
      fieldErrors.password1.push("Password must be at least 8 characters.");

    if (!/\d/.test(password1))
      fieldErrors.password1.push("Password must contain at least 1 number.");

    if (!/[A-Z]/.test(password1))
      fieldErrors.password1.push(
        "Password must contain at least 1 uppercase letter."
      );

    if (password1 !== password2)
      fieldErrors.password2.push("Passwords do not match.");
  }

  return fieldErrors;
};
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: accessTokenExpiration,
  });
};
const generateRefreshToken = async (user) => {
  const token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: refreshTokenExpiration,
  });

  // delete the old refresh tokens
  await RefreshTokens.destroy({
    where: { user_id: user.id },
  }).catch((error) => {
    console.log(error);
    return;
  });

  // create a new one
  await RefreshTokens.create({ token, user_id: user.id }).catch((error) => {
    console.log(error);
    return;
  });

  return token;
};

// Controllers
const registerUser = async (req, res) => {
  try {
    const { username, email, password1, password2 } = req.body;
    const fieldErrors = await validateUser(
      username,
      email,
      password1,
      password2
    );

    if (
      fieldErrors.username.length ||
      fieldErrors.email.length ||
      fieldErrors.password1.length ||
      fieldErrors.password2.length
    ) {
      return res.status(400).json(fieldErrors);
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password1, salt);

      await Users.create({
        username,
        email,
        password: hashedPassword,
      });

      return res.sendStatus(201);
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({
    where: { email },
    attributes: ["id", "username", "email", "password"],
  })
    .then((data) => {
      if (data) return data.toJSON();
      else return null;
    })
    .catch((error) => {
      console.log(error.message);
      return res.sendStatus(500);
    });

  if (!user) {
    return res.sendStatus(400);
  }

  if (await bcrypt.compare(password, user.password)) {
    delete user.password; //don't send back password to client

    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    return res.status(200).json({
      accessToken,
      refreshToken,
    });
  } else {
    return res.sendStatus(400);
  }
};
const refreshUserToken = async (req, res) => {
  try {
    const refreshToken = req.body.token;
    if (!refreshToken) {
      return res.sendStatus(401);
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (error, user) => {
        if (error) {
          console.log(error);
          return res.sendStatus(403);
        }
        const accessToken = generateAccessToken({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: user.roles,
        });
        const refreshToken = await generateRefreshToken({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: user.roles,
        });

        return res.status(200).json({ accessToken, refreshToken });
      }
    );
  } catch (error) {
    return res.sendStatus(500);
  }
};
const logoutUser = async (req, res) => {
  try {
    await RefreshTokens.destroy({
      where: { user_id: req.user.id },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  registerUser,
  loginUser,
  refreshUserToken,
  logoutUser,
};
