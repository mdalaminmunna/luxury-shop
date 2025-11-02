import { Link, NavLink, replace, useNavigate } from "react-router";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { TopBanner } from "./TopBanner";
import { Pointer } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="">
      <TopBanner />
      <div className="container mx-auto flex py-6 items-center">
        <button className="md:hidden">
          <Menu />
        </button>
        <h1 className="font-bold text-[32px]">SHOP.CO</h1>
        <ul className="flex items-center justify-center text-sm text-black gap-6 font-normal font-base px-10">
          <Link to="/" className="hover:text-red-500">
            <li>Home</li>
          </Link>
          <Link to="/shop" className="hover:text-red-500">
            <li>Shop</li>
          </Link>
          <Link to="/Cart" className="hover:text-red-500">
            <li>Cart</li>
          </Link>
          <Link to="/checkout" className="hover:text-red-500">
            <li>Checkout</li>
          </Link>
        </ul>
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="pl-5 flex gap-3.5 right-0">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
