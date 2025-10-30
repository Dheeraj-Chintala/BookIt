import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

export const createBooking = async (req, res) => {

  try {
    console.log("📦 Incoming body:", req.body);

    const { experienceId, name, email, date, time } = req.body;

    // ✅ Step 1: Validate all required fields
    if (!experienceId || !name || !email || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Step 2: Find the experience
    const experience = await Experience.findById(experienceId);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    // ✅ Step 3: Find matching date and slot
    const selectedDate = experience.availableSlots.find(
      (slot) => slot.date === date
    );
    if (!selectedDate) {
      return res.status(400).json({ message: "Invalid date selected" });
    }

    const selectedSlot = selectedDate.slots.find((s) => s.time === time);
    if (!selectedSlot) {
      return res.status(400).json({ message: "Invalid time slot" });
    }

    if (selectedSlot.isBooked) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    // ✅ Step 4: Mark slot as booked
    selectedSlot.isBooked = true;
    await experience.save();

    // ✅ Step 5: Create booking record
    const booking = await Booking.create({
      experienceId,
      name,
      email,
      date,
      time,
    });

    res.status(201).json({
      success: true,
      message: "🎉 Booking confirmed successfully!",
      booking,
    });
  } catch (error) {
    console.error("❌ Error creating booking:", error);
    res.status(500).json({ message: "Server error" });
  }
};
