const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }
  const token = "323dfsdf.sdf34f.4323";
  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
