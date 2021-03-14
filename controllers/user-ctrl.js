const User = require("../modules/user-model");

const createUser = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error:
        "Something went wrong Check if you entered all the fields correctly",
    });
  }
  const user = User(body);
  try {
    await user.save();
    return res.status(201).json({
      success: true,
      id: user._id,
      message: "user created!",
    });
  } catch (err) {
    return res.status(400).json({
      err,
      message: "user not created!",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
        return res.status(400).json({ success: false,  err });
      }
      if (!user) {
        return res.statuse(404).json({ success: false,  err });
      }
      return res
        .status(200)
        .json({ success: true, message: "The user has been deleted" });
    });
  } catch (err) {
    console.error(err.message);
  }
};

const getUserById = async (req, res) => {
  try {
    await User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: `User does not exist` });
      }
      return res.status(200).json({ success: true, data: user });
    });
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    await User.updateOne({ _id: req.params.id }, body);

    return res.status(200).json({ seccess: true });
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
