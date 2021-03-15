const User = require("../modules/user-model");
const { validationResult } = require("express-validator");
var winston = require('winston');


const createUser = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  try {
    const body = req.body;
    const userReq = User(body);
    const user = await userReq.save();
    return res.status(201).json({
      success: true,
      id: user._id,
      message: "user created!",
    });
  } catch (err) {
    winston.log(err)
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
    } else {
      return res
        .status(200)
        .json({ success: true, message: "The user has been deleted" });
    }
  } catch (err) {
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
    } else {
      return res.status(200).json({ success: true, data: user });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
  const user = await User.updateOne({ _id: req.params.id }, body);
    return res.status(200).json({ seccess: true, data :user });
  } catch (err) {
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
