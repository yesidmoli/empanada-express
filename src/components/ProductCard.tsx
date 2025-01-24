import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ProductCustomizationDialog } from "./ProductCustomizationDialog";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  promotion?: "10% OFF" | "Best Seller";
  category: "Beef" | "Chicken" | "Veggie";
}

export const ProductCard = ({
  name,
  description,
  price,
  promotion,
  category,
}: ProductCardProps) => {
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const handleAddToCart = (quantity: number, removedIngredients: string[]) => {
    console.log("Adding to cart:", {
      name,
      quantity,
      removedIngredients,
      totalPrice: price * quantity,
    });
    setCustomizeOpen(false);
  };

  const handleOpenPopup = () => {
    console.log("Opening popup for:", name);
    setCustomizeOpen(true);
  };

  return (
    <Card className="relative w-[150px]">
      {promotion && (
        <Badge
          variant="destructive"
          className="absolute right-2 top-2 z-10 bg-accent"
        >
          {promotion}
        </Badge>
      )}
      <div className="aspect-square w-[120px] mx-auto mt-4 rounded-lg bg-surface"></div>
      <div className="p-3">
        <h3 className="font-medium text-sm text-center line-clamp-2 mb-1">
          {name}
        </h3>
        <p className="text-base font-semibold text-center mb-2">${price}</p>
        <Button
          size="icon"
          className="absolute top-2 left-2 h-[30px] w-[30px] rounded-full bg-[#3BBF5C] hover:bg-[#3BBF5C]/90"
          onClick={handleOpenPopup}
        >
          <Plus className="h-4 w-4 text-white" />
        </Button>
      </div>

      <ProductCustomizationDialog
        open={customizeOpen}
        onOpenChange={setCustomizeOpen}
        name={name}
        description={description}
        price={price}
        onAddToCart={handleAddToCart}
      />
    </Card>
  );
};