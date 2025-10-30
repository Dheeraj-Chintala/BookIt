const API_BASE = import.meta.env.VITE_API_BASE;

export interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  availableSlots: {
    date: string;
    slots: {
      time: string;
      isBooked: boolean;
      _id: string;
    }[];
  }[];
}

export interface BookingData {
  experienceId: string;
  fullName: string;
  email: string;
  date: string;
  time: string;
  quantity: number;
  promoCode?: string;
}

export const api = {
  async getExperiences(): Promise<Experience[]> {
    const response = await fetch(`${API_BASE}/experiences`);
    if (!response.ok) throw new Error("Failed to fetch experiences");
    return response.json();
  },

  async getExperience(id: string): Promise<Experience> {
    const response = await fetch(`${API_BASE}/experiences/${id}`);
    if (!response.ok) throw new Error("Failed to fetch experience");
    return response.json();
  },

  async createBooking(data: BookingData): Promise<{ bookingId?: string; message?: string }> {
  const payload = {
    experienceId: data.experienceId,
    name: data.fullName, 
    email: data.email,
    date: data.date,
    time: data.time,
  };

  console.log("Creating booking with payload:", payload);

  const response = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const res = await response.json();
  console.log("API Response:", res);

  if (!response.ok) {
    const errorMessage = res?.message || "Failed to create booking";
    throw new Error(errorMessage);
  }

  return res;
},
 async validatePromo(code: string, total: number): Promise<{ valid: boolean; discount?: number; finalPrice?: number; message?: string }> {
    const response = await fetch(`${API_BASE}/promo/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, total }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Promo validation failed");
    return data;
  },



};
