module.exports = async (req, res) => {
  try {
    res.send('"Get Request" route is working !!');
  } catch (error) {
    console.log(error);
  }
};
