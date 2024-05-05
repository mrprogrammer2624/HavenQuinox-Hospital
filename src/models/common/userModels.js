import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Me A Name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please Provide Me An Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide Me A Password"],
    minlength: 8,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  isReception: {
    type: Boolean,
    default: false,
  },
  isPatient: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User =
  mongoose.models.signupData || mongoose.model("signupData", userSchema);

export default User;
