const uploadOnCloudinary = require("../config/cloudinary");
const User = require("../models/User");

const getCurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { description, name } = req.body;
    let photoUrl;
    if (req.file) {
      photoUrl = await uploadOnCloudinary(req.file.path);
    }
    const user = await User.findByIdAndUpdate(userId, {
      name,
      description,
      photoUrl,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.save();
    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Update Profile Error", error: error.message });
  }
};

module.exports = { getCurrentUser, updateProfile };
