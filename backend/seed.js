// backend/seed.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./src/config/db.js";
import Experience from "./src/models/Experience.js";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Connect to database
await connectDB();

// Sample data
const experiences = [
  {
    title: "Backwaters Houseboat Cruise - Kerala",
    description:
      "Sail through the tranquil backwaters of Alleppey in a traditional houseboat and enjoy authentic Kerala cuisine.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    location: "Alleppey, Kerala",
    price: 120,
    availableSlots: [
      {
        date: "2025-11-07",
        slots: [
          { time: "9:00 AM", isBooked: false },
          { time: "2:00 PM", isBooked: false },
        ],
      },
      {
        date: "2025-11-08",
        slots: [
          { time: "10:00 AM", isBooked: false },
          { time: "4:00 PM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Camel Safari - Jaisalmer",
    description:
      "Explore the golden dunes of the Thar Desert on a camel ride and enjoy traditional Rajasthani folk performances.",
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8b1?auto=format&fit=crop&w=1200&q=80",
    location: "Jaisalmer, Rajasthan",
    price: 100,
    availableSlots: [
      {
        date: "2025-11-09",
        slots: [
          { time: "4:00 PM", isBooked: false },
          { time: "6:00 PM", isBooked: false },
        ],
      },
      {
        date: "2025-11-10",
        slots: [
          { time: "5:00 PM", isBooked: false },
          { time: "7:00 PM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "River Rafting Adventure - Rishikesh",
    description:
      "Conquer the thrilling rapids of the Ganga River surrounded by serene Himalayan foothills.",
    image:
      "https://images.unsplash.com/photo-1571066811602-716837d6818b?auto=format&fit=crop&w=1200&q=80",
    location: "Rishikesh, Uttarakhand",
    price: 90,
    availableSlots: [
      {
        date: "2025-11-11",
        slots: [
          { time: "8:00 AM", isBooked: false },
          { time: "11:00 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-12",
        slots: [
          { time: "9:00 AM", isBooked: false },
          { time: "1:00 PM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Paragliding - Bir Billing",
    description:
      "Soar above the Dhauladhar mountains and enjoy breathtaking views of the valleys below.",
    image:
      "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1200&q=80",
    location: "Bir Billing, Himachal Pradesh",
    price: 130,
    availableSlots: [
      {
        date: "2025-11-13",
        slots: [
          { time: "9:00 AM", isBooked: false },
          { time: "11:00 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-14",
        slots: [
          { time: "10:00 AM", isBooked: false },
          { time: "12:00 PM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Tea Estate Walk - Munnar",
    description:
      "Stroll through lush tea plantations, visit a tea factory, and enjoy panoramic mountain views.",
    image:
      "https://images.unsplash.com/photo-1581804928342-4e3405e39c91?auto=format&fit=crop&w=1200&q=80",
    location: "Munnar, Kerala",
    price: 60,
    availableSlots: [
      {
        date: "2025-11-08",
        slots: [
          { time: "7:00 AM", isBooked: false },
          { time: "9:00 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-09",
        slots: [
          { time: "8:00 AM", isBooked: false },
          { time: "10:00 AM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Hot Air Balloon Ride - Jaipur",
    description:
      "Enjoy panoramic views of Jaipur’s forts, palaces, and countryside during a sunrise hot air balloon ride.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80",
    location: "Jaipur, Rajasthan",
    price: 180,
    availableSlots: [
      {
        date: "2025-11-12",
        slots: [
          { time: "6:00 AM", isBooked: false },
          { time: "7:30 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-13",
        slots: [
          { time: "6:30 AM", isBooked: false },
          { time: "8:00 AM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Scuba Diving - Andaman Islands",
    description:
      "Dive into turquoise waters and explore vibrant coral reefs filled with marine life.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    location: "Havelock Island, Andaman",
    price: 200,
    availableSlots: [
      {
        date: "2025-11-09",
        slots: [
          { time: "9:00 AM", isBooked: false },
          { time: "1:00 PM", isBooked: false },
        ],
      },
      {
        date: "2025-11-10",
        slots: [
          { time: "10:00 AM", isBooked: false },
          { time: "3:00 PM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Snow Trek - Manali",
    description:
      "Embark on a scenic trek through snow-covered landscapes and pine forests in the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1600087626120-6b1e6a3d79f8?auto=format&fit=crop&w=1200&q=80",
    location: "Manali, Himachal Pradesh",
    price: 140,
    availableSlots: [
      {
        date: "2025-11-14",
        slots: [
          { time: "8:00 AM", isBooked: false },
          { time: "10:00 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-15",
        slots: [
          { time: "9:00 AM", isBooked: false },
          { time: "11:00 AM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Cultural Heritage Walk - Varanasi",
    description:
      "Witness the morning rituals on the ghats and explore the ancient temples of the holy city.",
    image:
      "https://images.unsplash.com/photo-1606220603420-6e3a16e0b14d?auto=format&fit=crop&w=1200&q=80",
    location: "Varanasi, Uttar Pradesh",
    price: 70,
    availableSlots: [
      {
        date: "2025-11-15",
        slots: [
          { time: "5:30 AM", isBooked: false },
          { time: "6:30 AM", isBooked: false },
        ],
      },
      {
        date: "2025-11-16",
        slots: [
          { time: "7:00 AM", isBooked: false },
          { time: "8:00 AM", isBooked: false },
        ],
      },
    ],
  },
  {
    title: "Wildlife Safari - Ranthambore",
    description:
      "Go on a thrilling jeep safari through Ranthambore National Park in search of Bengal tigers.",
    image:
      "https://images.unsplash.com/photo-1508675801602-021d4b1327b9?auto=format&fit=crop&w=1200&q=80",
    location: "Ranthambore, Rajasthan",
    price: 160,
    availableSlots: [
      {
        date: "2025-11-13",
        slots: [
          { time: "6:00 AM", isBooked: false },
          { time: "4:00 PM", isBooked: false },
        ],
      },
      {
        date: "2025-11-14",
        slots: [
          { time: "7:00 AM", isBooked: false },
          { time: "5:00 PM", isBooked: false },
        ],
      },
    ],
  },
];


// Seed function
const seedDatabase = async () => {
  try {
    await Experience.deleteMany();
    console.log("🗑️ Old data deleted");

    await Experience.insertMany(experiences);
    console.log("🌱 New sample experiences added");

    mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
