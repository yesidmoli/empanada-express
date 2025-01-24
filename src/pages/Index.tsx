import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  const navigate = useNavigate();
  const [deliveryMode, setDeliveryMode] = useState<"pickup" | "delivery">("delivery");

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setDeliveryMode("delivery")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  deliveryMode === "delivery"
                    ? "bg-primary text-secondary"
                    : "bg-surface text-text-secondary"
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => setDeliveryMode("pickup")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  deliveryMode === "pickup"
                    ? "bg-primary text-secondary"
                    : "bg-surface text-text-secondary"
                }`}
              >
                Pickup
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-b from-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-10 blur-sm"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-secondary mb-2">
            Delicious Empanadas
          </h1>
          <p className="text-secondary/80 mb-8 max-w-md">
            Handcrafted with love, delivered to your door
          </p>
          <button
            onClick={() => navigate("/catalog")}
            className="btn-primary"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card p-4">
              <div className="aspect-square rounded-lg bg-surface mb-3"></div>
              <h3 className="font-medium mb-1">Classic Beef</h3>
              <p className="text-text-secondary text-sm mb-3">
                Traditional Argentine style
              </p>
              <span className="font-semibold">$3.99</span>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Today's Specials</h2>
        <div className="card p-6 bg-gradient-to-r from-accent to-accent/90 text-white">
          <h3 className="text-xl font-bold mb-2">Family Pack</h3>
          <p className="mb-4">Get 12 empanadas for the price of 10!</p>
          <button className="btn-primary">
            View Deal
          </button>
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Index;