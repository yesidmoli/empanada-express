import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "../components/Navigation";

type Order = {
  id: string;
  date: string;
  items: {
    name: string;
    quantity: number;
  }[];
  total: number;
};

// Mock data for demonstration
const orderHistory: Order[] = [
  {
    id: "1",
    date: "2024-04-10",
    items: [
      { name: "Classic Beef", quantity: 2 },
      { name: "Spicy Chicken", quantity: 1 },
    ],
    total: 11.97,
  },
  {
    id: "2",
    date: "2024-04-08",
    items: [
      { name: "Spicy Chicken", quantity: 3 },
    ],
    total: 11.97,
  },
];

const Profile = () => {
  const handleReorder = (orderId: string) => {
    console.log("Reordering order:", orderId);
    // Implementation for reorder functionality would go here
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getOrderSummary = (items: Order['items']) => {
    if (items.length === 0) return "No items";
    const mainItem = items[0];
    const additionalItems = items.length - 1;
    return `${mainItem.name}${additionalItems > 0 ? ` + ${additionalItems} items` : ''}`;
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>
        <div className="space-y-4">
          {orderHistory.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(order.date)}
                    </p>
                    <p className="font-medium">{getOrderSummary(order.items)}</p>
                    <p className="text-sm text-muted-foreground">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleReorder(order.id)}
                    className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black"
                  >
                    Reorder
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Profile;