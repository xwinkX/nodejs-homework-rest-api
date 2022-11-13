const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Verifiy email",
    html: `<a href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
