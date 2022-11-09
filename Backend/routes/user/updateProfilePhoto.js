const User = require("../../models/userModel");
const cloudinary = require("../../middlewares/cloudinary");

module.exports = async (req, res) => {
  let { profileAvatar } = req.body;

  try {
    let { id } = req.params;

    // upload profile avatar to cloudinary
    if (profileAvatar) {
      const uploadAvatar = await cloudinary.uploader.upload(profileAvatar, {
        upload_preset: "phdqtyk1",
      });

      // update driver in the database
      if (uploadAvatar) {
        const user = await User.findByIdAndUpdate(
          id,
          {
            $set: { ...req.body },
          },
          { new: true }
        );

        res.send({
          message: '"User Profile Photo" route is working !!',
          data: user,
        });
      }
    }
  } catch (error) {
    if (error) throw error;
    console.log(error);
    res.status(500).send(error);
  }
};
