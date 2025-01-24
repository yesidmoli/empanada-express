import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ProductCard } from "../components/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = "All" | "Beef" | "Chicken" | "Veggie";

const products = [
  {
    name: "Classic Beef",
    description: "Traditional Argentine style",
    price: 3.99,
    category: "Beef" as const,
    promotion: "Best Seller" as const,
  },
  {
    name: "Spicy Chicken",
    description: "With bell peppers and onions",
    price: 3.99,
    category: "Chicken" as const,
    promotion: "10% OFF" as const,
  },
  {
    name: "Spinach & Cheese",
    description: "Fresh vegetables and mozzarella",
    price: 3.99,
    category: "Veggie" as const,
  },
  {
    name: "BBQ Beef",
    description: "Sweet and smoky flavor",
    price: 3.99,
    category: "Beef" as const,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [deliveryMode, setDeliveryMode] = useState<"pickup" | "delivery">("delivery");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as Category)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Beef">Beef</SelectItem>
              <SelectItem value="Chicken">Chicken</SelectItem>
              <SelectItem value="Veggie">Veggie</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
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