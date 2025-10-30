// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "@/components/Header";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ArrowLeft } from "lucide-react";
// import { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { api } from "@/lib/api";
// import { toast } from "sonner";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const bookingData = location.state;

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [promoCode, setPromoCode] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

  
//   const createBookingMutation = useMutation({
//     mutationFn: api.createBooking,
//     onSuccess: (data) => {
//       navigate("/confirmation", { state: { bookingId: data.bookingId } });
//     },
//     onError: () => {
//       toast.error("Failed to create booking. Please try again.");
//     },
//   });

//   if (!bookingData) {
//     navigate("/");
//     return null;
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!fullName || !email) {
//       toast.error("Please fill in all required fields");
//       return;
//     }

//     if (!agreedToTerms) {
//       toast.error("Please agree to the terms and safety policy");
//       return;
//     }

//     createBookingMutation.mutate({
//       experienceId: bookingData.experienceId,
//       fullName,
//       email,
//       date: bookingData.date,
//       time: bookingData.time,
//       quantity: bookingData.quantity,
//       promoCode: promoCode || undefined,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Checkout
//         </Button>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
//             <div className="bg-card border rounded-lg p-6 bg-gray-100">
//               <div className="grid md:grid-cols-2 gap-4 mb-4 ">
//                 <div>
//                   <Label htmlFor="fullName">Full name</Label>
//                   <Input
//                     id="fullName"
//                     placeholder="Your name"
//                     value={fullName}
//                     className="bg-gray-200"
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Your email"
//                     value={email}
//                     className="bg-gray-200"
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-2 mb-4">
//                 <Input
//                   placeholder="Promo code"
//                   value={promoCode}
//                   className="bg-gray-200"
//                   onChange={(e) => setPromoCode(e.target.value)}
//                 />
//                 <Button type="button" variant="secondary" className="bg-black text-white hover:bg-gray-800 hover:shadow">
//                   Apply
//                 </Button>
//               </div>

//               <div className="flex items-start gap-2">
//                 <Checkbox
//                   id="terms"
//                   checked={agreedToTerms}
//                   onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
//                 />
//                 <label
//                   htmlFor="terms"
//                   className="text-sm text-muted-foreground cursor-pointer"
//                 >
//                   I agree to the terms and safety policy
//                 </label>
//               </div>
//             </div>
//           </form>

//           <div>
//             <div className="bg-card border rounded-lg p-6 sticky top-24 bg-gray-100">
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Experience</span>
//                   <span className="font-medium">{bookingData.experienceName}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Date</span>
//                   <span>{new Date(bookingData.date).toLocaleDateString()}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Time</span>
//                   <span>{bookingData.time}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Qty</span>
//                   <span>{bookingData.quantity}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Subtotal</span>
//                   <span>₹{bookingData.subtotal}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Taxes</span>
//                   <span>₹{bookingData.taxes}</span>
//                 </div>
//                 <div className="border-t pt-3 flex justify-between font-semibold text-lg">
//                   <span>Total</span>
//                   <span>₹{bookingData.total}</span>
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full"
//                 size="lg"
//                 onClick={handleSubmit}
//                 disabled={createBookingMutation.isPending}
//               >
//                 {createBookingMutation.isPending ? "Processing..." : "Pay and Confirm"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Checkout;

import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { toast } from "sonner";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(bookingData?.total || 0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const createBookingMutation = useMutation({
    mutationFn: api.createBooking,
    onSuccess: (data) => {
      navigate("/confirmation", { state: { bookingId: data.bookingId } });
    },
    onError: () => {
      toast.error("Failed to create booking. Please try again.");
    },
  });

  if (!bookingData) {
    navigate("/");
    return null;
  }

  const handlePromoApply = async () => {
    if (!promoCode) {
      toast.error("Please enter a promo code");
      return;
    }

    try {
      const res = await api.validatePromo(promoCode, bookingData.total);
      if (res.valid) {
        setDiscount(res.discount || 0);
        setFinalTotal(res.finalPrice || bookingData.total);
        toast.success(`Promo applied! You saved ₹${res.discount.toFixed(2)}`);
      }
    } catch (err: any) {
      setDiscount(0);
      setFinalTotal(bookingData.total);
      toast.error(err.message || "Invalid promo code");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!agreedToTerms) {
      toast.error("Please agree to the terms and safety policy");
      return;
    }

    createBookingMutation.mutate({
      experienceId: bookingData.experienceId,
      fullName,
      email,
      date: bookingData.date,
      time: bookingData.time,
      quantity: bookingData.quantity,
      promoCode: promoCode || undefined,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6  hover:bg-gray-100 hover:text-black" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Checkout
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="bg-card border rounded-lg p-6 bg-gray-100">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your name"
                    value={fullName}
                    className="bg-gray-200"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    className="bg-gray-200"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ✅ Promo Code Section */}
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Promo code"
                  value={promoCode}
                  className="bg-gray-200"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-800 hover:shadow"
                  onClick={handlePromoApply}
                >
                  Apply
                </Button>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  I agree to the terms and safety policy
                </label>
              </div>
            </div>
          </form>

          {/* ✅ Order Summary */}
          <div>
            <div className="bg-card border rounded-lg p-6 sticky top-24 bg-gray-100">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">{bookingData.experienceName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span>{new Date(bookingData.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span>{bookingData.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Qty</span>
                  <span>{bookingData.quantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{bookingData.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>₹{bookingData.taxes}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={createBookingMutation.isPending}
              >
                {createBookingMutation.isPending ? "Processing..." : "Pay and Confirm"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
