import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const DeliveryPickup = () => {
  const [mode, setMode] = useState<"delivery" | "pickup" | null>(null);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (mode === "delivery" && !address) return;
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Choose Delivery Method</h1>

      <div className="space-y-4 mb-6">
        <Button
          className={`w-full ${
            mode === "delivery"
              ? "bg-primary text-secondary"
              : "bg-surface text-secondary"
          }`}
          onClick={() => setMode("delivery")}
        >
          Delivery
        </Button>
        <Button
          className={`w-full ${
            mode === "pickup"
              ? "bg-primary text-secondary"
              : "bg-surface text-secondary"
          }`}
          onClick={() => setMode("pickup")}
        >
          Pickup
        </Button>
      </div>

      {mode === "delivery" && (
        <Card className="mb-6">
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Delivery Address
              </label>
              <Input
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="text-sm text-text-secondary">
              Estimated time: 30 mins
            </div>
          </CardContent>
        </Card>
      )}

      {mode === "pickup" && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Pickup Locations</h3>
            <div className="space-y-2">
              <div className="p-2 rounded bg-surface cursor-pointer">
                Downtown Store
              </div>
              <div className="p-2 rounded bg-surface cursor-pointer">
                Mall Location
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        className="w-full bg-primary text-secondary hover:bg-primary/90"
        onClick={handleContinue}
        disabled={mode === "delivery" && !address}
      >
        {mode === "delivery" ? "Confirm Delivery" : "Continue to Payment"}
      </Button>
    </div>
  );
};

export default DeliveryPickup;