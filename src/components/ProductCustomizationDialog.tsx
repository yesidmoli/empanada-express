import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Ingredient {
  id: string;
  name: string;
  image: string;
}

interface ProductCustomizationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  description: string;
  price: number;
  onAddToCart: (quantity: number, removedIngredients: string[]) => void;
}

const ingredients: Ingredient[] = [
  { id: "cheese", name: "Cheese", image: "/placeholder.svg" },
  { id: "meat", name: "Ground Beef", image: "/placeholder.svg" },
  { id: "onion", name: "Onions", image: "/placeholder.svg" },
  { id: "pepper", name: "Bell Peppers", image: "/placeholder.svg" },
];

export function ProductCustomizationDialog({
  open,
  onOpenChange,
  name,
  description,
  price,
  onAddToCart,
}: ProductCustomizationDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => Math.max(1, prev + (increment ? 1 : -1)));
  };

  const handleAddToCart = () => {
    onAddToCart(quantity, removedIngredients);
    setQuantity(1);
    setRemovedIngredients([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed bottom-0 left-0 right-0 max-h-[90vh] rounded-t-[20px] p-6 animate-slide-up sm:relative sm:rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="text-left text-xl font-bold">{name}</DialogTitle>
          <p className="text-left text-sm text-text-secondary mt-1">{description}</p>
          <p className="text-left font-bold mt-3">${price.toFixed(2)}</p>
        </DialogHeader>

        <div className="flex-1 overflow-auto py-4">
          <h3 className="font-medium mb-4">Customize Ingredients</h3>
          <RadioGroup
            value={removedIngredients.join(",")}
            onValueChange={(value) => setRemovedIngredients(value.split(",").filter(Boolean))}
            className="space-y-3"
          >
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-12 h-12 rounded-full object-cover bg-surface"
                  />
                  <span className="text-base font-medium">{ingredient.name}</span>
                </div>
                <RadioGroupItem
                  value={ingredient.id}
                  id={ingredient.id}
                  className="border-2 h-6 w-6"
                />
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => handleQuantityChange(false)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-base font-medium w-8 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => handleQuantityChange(true)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-[#3BBF5C] hover:bg-[#3BBF5C]/90 text-white px-6 h-[50px] rounded-[10px] min-w-[200px]"
          >
            Add ${(price * quantity).toFixed(2)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}