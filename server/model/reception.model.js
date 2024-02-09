import mongoose from "mongoose";

const receptionSchema = new mongoose.Schema({
  reception_place: {
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

export default mongoose.model("receptionData", receptionSchema);
