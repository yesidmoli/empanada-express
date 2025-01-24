import { Home, ShoppingBag, ShoppingCart, User, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
            <Home size={24} />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/catalog" className={`nav-item ${isActive("/catalog") ? "active" : ""}`}>
            <ShoppingBag size={24} />
            <span className="text-xs">Menu</span>
          </Link>
          <Link to="/cart" className={`nav-item ${isActive("/cart") ? "active" : ""}`}>
            <ShoppingCart size={24} />
            <span className="text-xs">Cart</span>
          </Link>
          <Link to="/profile" className={`nav-item ${isActive("/profile") ? "active" : ""}`}>
            <User size={24} />
            <span className="text-xs">Profile</span>
          </Link>
          <Link to="/support" className={`nav-item ${isActive("/support") ? "active" : ""}`}>
            <MessageSquare size={24} />
            <span className="text-xs">Support</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;