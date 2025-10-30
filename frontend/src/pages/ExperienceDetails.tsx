import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ExperienceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { data: experience, isLoading } = useQuery({
    queryKey: ["experience", id],
    queryFn: () => api.getExperience(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Experience not found</p>
        </div>
      </div>
    );
  }

  const subtotal = experience.price * quantity;
  const taxes = Math.round(subtotal * 0.06);
  const total = subtotal + taxes;

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time");
      return;
    }
    navigate("/checkout", {
      state: {
        experienceId: experience._id,
        experienceName: experience.title,
        date: selectedDate,
        time: selectedTime,
        quantity,
        subtotal,
        taxes,
        total,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-gray-100 hover:text-black"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Details
        </Button>

        <div className="grid lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-lg overflow-hidden mb-6 h-3/5 w-full ">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
            <p className="text-muted-foreground mb-8">
              {experience.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Choose date</h2>
              <div className="flex flex-wrap gap-2">
                {experience.availableSlots.map((slot) => (
                  <Button
                    key={slot.date}
                    variant={selectedDate === slot.date ? "default" : "outline"}
                    onClick={() => {
                      setSelectedDate(slot.date);
                      setSelectedTime("");
                    }}
                  >
                    {new Date(slot.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </Button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Choose time</h2>
                <div className="flex flex-wrap gap-2">
                  {experience.availableSlots
                    .find((slot) => slot.date === selectedDate)
                    ?.slots.map((timeSlot) => (
                      <Button
                        key={timeSlot._id}
                        variant={
                          selectedTime === timeSlot.time ? "default" : "outline"
                        }
                        disabled={timeSlot.isBooked}
                        onClick={() => setSelectedTime(timeSlot.time)}
                        className="relative"
                      >
                        {timeSlot.time}
                        {!timeSlot.isBooked && (
                          <Badge
                            variant="secondary"
                            className="ml-2 text-xs bg-green-100 text-green-800"
                          >
                            4 left
                          </Badge>
                        )}
                        {timeSlot.isBooked && (
                          <Badge
                            variant="secondary"
                            className="ml-2 text-xs bg-gray-100 text-gray-600"
                          >
                            Sold out
                          </Badge>
                        )}
                      </Button>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  All times are in IST (GMT +5:30)
                </p>
              </div>
            )}

            <div className="bg-muted p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-sm text-muted-foreground">
                Scenic routes, trained guides, and safety briefing. Minimum age 10.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-card border rounded-lg p-6 sticky top-24 bg-gray-100">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Starts at</span>
                  <span className="font-semibold">₹{experience.price}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>₹{taxes}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExperienceDetails;
