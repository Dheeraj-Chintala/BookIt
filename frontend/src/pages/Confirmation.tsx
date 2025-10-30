import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";


const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId } = location.state || { bookingId: "HUF56&SO" };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-success p-4">
              <Check className="w-12 h-12 text-success-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed</h1>
          <p className="text-muted-foreground mb-8">
            Ref ID: <span className="font-semibold">{bookingId}</span>
          </p>

          <Button onClick={() => navigate("/")} size="lg">
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Confirmation;
