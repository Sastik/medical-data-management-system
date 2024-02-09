import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  doctorname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("DoctorData", doctorSchema);
