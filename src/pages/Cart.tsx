import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Mock data for demonstration
const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Classic Beef Empanada",
    price: 3.99,
    quantity: 2,
    image: "empanada_carne.jpg"
  },
  {
    id: "2",
    name: "Spicy Chicken Empanada",
    price: 3.99,
    quantity: 1,
    image: "empanada_pollo.jpg"
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const navigate = useNavigate();

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate("/delivery-pickup");
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="text-lg font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>

        <div className="space-y-4 mb-20">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <img src={item.image} className="aspect-square w-20 rounded-lg bg-surface mb-2" />
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-text-secondary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-accent hover:text-accent/90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-8 w-8"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-8 w-8"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t">
        <Button
          className="w-full bg-primary text-secondary hover:bg-primary/90"
          size="lg"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>

      <Navigation />
    </div>
  );
};

export default Cart;