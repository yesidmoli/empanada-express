import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Implementation for order placement would go here
    console.log("Placing order...");
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$11.97</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$1.20</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="border-t pt-2 font-semibold flex justify-between">
              <span>Total</span>
              <span>$16.16</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="font-semibold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <div className="p-3 rounded border flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-surface rounded"></div>
              <span>Credit Card (Stripe)</span>
            </div>
            <div className="p-3 rounded border flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-surface rounded"></div>
              <span>Apple Pay</span>
            </div>
            <div className="p-3 rounded border flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-surface rounded"></div>
              <span>Google Pay</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        className="w-full bg-primary text-secondary hover:bg-primary/90"
        size="lg"
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </div>
  );
};

export default Checkout;