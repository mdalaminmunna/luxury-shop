import { Link, NavLink } from "react-router";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { TopBanner } from "./TopBanner";

import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Search } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <TopBanner />
      <div className="container mx-auto py-4">
        <div className="flex lg:items-center justify-between lg:gap-10 xl:px-0 px-4">
          <button
            className="lg:hidden py-4 pr-3 rounded-md"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>

          <Link className="font-integral-bold text-[32px]">SHOP.CO</Link>

          <ul className="hidden lg:flex items-center text-base text-black gap-6 font-normal font-base">
            <NavLink to="/" className="hover:opacity-70">
              <li>Home</li>
            </NavLink>
            <NavLink to="/shop" className="hover:opacity-70">
              <li>Shop</li>
            </NavLink>
            <NavLink to="/Cart" className="hover:opacity-70">
              <li>Cart</li>
            </NavLink>
            <NavLink to="/checkout" className="hover:opacity-70">
              <li>Checkout</li>
            </NavLink>
          </ul>

          <div className="flex-1">
            <SearchBar
              isOpen={isSearchOpen}
              setIsOpen={setIsSearchOpen}
              onSearch={handleSearch}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              className="lg:hidden rounded-md"
              aria-label="Toggle search"
              onClick={() => setIsSearchOpen((event) => !event)}
            >
              <Search />
            </button>
            <NavLink to="/cart">
              <ShoppingCart />
            </NavLink>
            <CircleUserRound />
          </div>
        </div>
      </div>

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
              <NavLink
                to="/"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/shop"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Shop</li>
              </NavLink>
              <NavLink
                to="/Cart"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Cart</li>
              </NavLink>
              <NavLink
                to="/checkout"
                className="text-lg hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>Checkout</li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
