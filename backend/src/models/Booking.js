import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  slotDate: String,
  slotTime: String,
  promoCode: String,
  finalPrice: Number,
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
