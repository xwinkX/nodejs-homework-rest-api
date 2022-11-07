const { Schema, model } = require("mongoose");

const Joi = require("joi");

const errors = (errors) =>
  new Error("Помилка від Joi або іншої бібліотеки валідації");

const { hendleSaveerrors } = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", hendleSaveerrors);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required().error(errors),
  email: Joi.string().email().required().error(errors),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required().error(errors),
  email: Joi.string().email().required().error(errors),
});

const schemas = {
  registerSchema,
  loginSchema,
};

module.exports = {
  User,
  schemas,
};
