import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  location: String,
  price: { type: Number, required: true },
  availableSlots: [
    {
      date: String,
      slots: [
        {
          time: String,
          isBooked: { type: Boolean, default: false }
        }
      ]
    }
  ],
});

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;
