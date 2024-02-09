import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ambulance_mobile_number: String,
  type: String,
  website: { type: String }, 
  image: String,
  opening_time: String,
  closing_time: String,
  location: String,
  special_list: [String],
  public_rating: {
    type: Number,
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 5;
      },
      message: (props) => `${props.value} is not a valid rating (should be between 0 and 5)!`,
    },
  },
});

export default mongoose.model('Hospital', hospitalSchema);

