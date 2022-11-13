const { User } = require("../../models/user");

const { RequestError, sendEmail } = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
};

module.exports = resendEmail;
