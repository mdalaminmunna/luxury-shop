import { Link, NavLink } from "react-router";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { TopBanner } from "./TopBanner";

import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
        <div className="flex lg:items-center justify-between lg:gap-10">
          <div className="lg:hidden py-2.5 pr-3 rounded-md">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="border-0 p-0"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <div>
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
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3"></div>
                  <div className="grid gap-3"></div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

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

          <div className="flex items-center gap-3">
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
    </div>
  );
};
