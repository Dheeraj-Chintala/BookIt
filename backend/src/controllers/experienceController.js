import Experience from "../models/Experience.js";

// GET /experiences
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experiences", error });
  }
};

// GET /experiences/:id
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experience details", error });
  }
};
