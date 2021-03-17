const User = require("../modules/user-model");
const { validationResult } = require("express-validator");
const logger = require('../logger/logger')

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const userSchema = User(body);
    const user = await userSchema.save();
    return res.status(201).json({
      success: true,
      id: user._id,
      message: "user created!",
    });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({
      err,
      message: "user not created!",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      return res.statuse(404).json({ success: false, err });
    }
    return res
      .status(200)
      .json({ success: true, message: "The user has been deleted" });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({ success: false, err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `User does not exist` });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    logger.error('error',err);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.updateOne({ _id: req.params.id }, body);
    if (!user) {
      return res.status(400).json({ seccess: false, message: "Error" });
    }
    return res.status(200).json({ seccess: true, data: user });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({
      err,
      message: "user not updated!",
    });
  }
};

module.exports = {
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
