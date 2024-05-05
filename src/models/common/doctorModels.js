import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: false,
  },
  explanation: {
    type: String,
    required: [true, "Please provide an explanation"],
    unique: false,
  },
});

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
