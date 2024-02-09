import mongoose from "mongoose";

const caretakkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: String,
  public_rating: {
    type: Number,
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 5;
      },
      message: (props) =>
        `${props.value} is not a valid rating (should be between 0 and 5)!`,
    },
  },
});

export default mongoose.model("Caretaker", caretakkerSchema);
