import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  promotion?: "10% OFF" | "Best Seller";
  category: "Beef" | "Chicken" | "Veggie";
}

interface CustomizationOption {
  id: string;
  label: string;
  price: number;
}

const customizationOptions: CustomizationOption[] = [
  { id: "extra-cheese", label: "Extra Cheese", price: 0.99 },
  { id: "spicy-sauce", label: "Add Spicy Sauce", price: 0.49 },
  { id: "combo-drink", label: "Combo with Drink", price: 1.99 },
];

export const ProductCard = ({
  name,
  description,
  price,
  promotion,
  category,
}: ProductCardProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const calculateTotal = () => {
    const optionsTotal = selectedOptions.reduce((total, optionId) => {
      const option = customizationOptions.find((opt) => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    return (price + optionsTotal).toFixed(2);
  };

  return (
    <Card className="relative">
      {promotion && (
        <Badge
          variant="destructive"
          className="absolute right-2 top-2 z-10 bg-accent"
        >
          {promotion}
        </Badge>
      )}
      <div className="aspect-square rounded-lg bg-surface mb-3"></div>
      <div className="p-4">
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-text-secondary text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">${price}</span>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default">Customize</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{name}</SheetTitle>
                <SheetDescription>
                  Customize your empanada to your taste
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                {customizationOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center justify-between space-x-2 mb-4"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={selectedOptions.includes(option.id)}
                        onCheckedChange={(checked) => {
                          setSelectedOptions(
                            checked
                              ? [...selectedOptions, option.id]
                              : selectedOptions.filter((id) => id !== option.id)
                          );
                        }}
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                    <span className="text-sm text-text-secondary">
                      +${option.price.toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Card>
  );
};