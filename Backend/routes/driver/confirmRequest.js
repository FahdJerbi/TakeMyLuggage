module.exports = async (req, res) => {
  try {
    res.send('"confirm Request" route is working !!');
  } catch (error) {
    console.log(error);
  }
};
