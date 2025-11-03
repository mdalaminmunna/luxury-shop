import { Link, NavLink, replace, useNavigate } from "react-router";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { TopBanner } from "./TopBanner";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <TopBanner />
      <div className="container mx-auto flex py-4">
        {/* <div className="flex items-center justify-between gap-4"> */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        <h1 className="font-bold text-[32px]">SHOP.CO</h1>

        <ul className="hidden lg:flex items-center justify-center text-sm text-black gap-6 font-normal font-base px-10">
          <Link to="/" className="hover:opacity-70">
            <li>Home</li>
          </Link>
          <Link to="/shop" className="hover:opacity-70">
            <li>Shop</li>
          </Link>
          <Link to="/Cart" className="hover:opacity-70">
            <li>Cart</li>
          </Link>
          <Link to="/checkout" className="hover:opacity-70">
            <li>Checkout</li>
          </Link>
        </ul>
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="pl-5 py-4 flex gap-3.5 right-0">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
          <CircleUserRound />
        </div>
      </div>
      {/* </div> */}
      {isMenuOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 z-50 shadow-lg lg:hidden bg-[#f0f0f0]">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                className="p-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-4">
              <Link
                to="/"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/shop"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Shop</li>
              </Link>
              <Link
                to="/Cart"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Cart</li>
              </Link>
              <Link
                to="/checkout"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Checkout</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
