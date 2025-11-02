import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        visible
          ? "opacity-100 max-h-20 translate-y-0"
          : "opacity-0 max-h-0 -translate-y-full"
      }`}
    >
      <div className="bg-black text-white py-2.5">
        <div className="container mx-auto relative">
          <div className="flex items-center justify-center">
            <p className="font-normal text-sm content-center">
              Sign up and get 20% off to your first order.{" "}
              <Link className="underline font-medium" href="#">
                Sign Up Now
              </Link>
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-0 cursor-pointer hidden sm:block"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
