import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
  backgroundImage: {
    type: String,
    required: [false, "Please provide a name"],
    unique: false,
  },
  avatar: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  address: {
    type: String,
    required: [false, "Please provide an email"],
    unique: false,
  },
  spouse: {
    type: String,
    required: [false, "Please provide an email"],
    unique: false,
  },
  birthday: {
    type: Number,
    required: [true, "Please provide an email"],
    unique: false,
  },
  contactNo: {
    type: Number,
    required: [true, "Please provide an email"],
    unique: true,
  },
  explanation: {
    type: String,
    required: [false, "Please provide an explanation"],
    unique: false,
  },
});

const Patients =
  mongoose.models.Patients || mongoose.model("Patients", patientsSchema);

export default Patients;
