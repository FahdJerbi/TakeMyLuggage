const Driver = require("../../models/driverModel");
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
        const driver = await Driver.findByIdAndUpdate(
          id,
          {
            $set: { ...req.body },
          },
          { new: true }
        );

        res.send({
          message: '"Driver Profile Photo" route is working !!',
          data: driver,
        });
      }
    }
  } catch (error) {
    if (error) throw error;
    console.log(error);
    res.status(500).send(error);
  }
};
