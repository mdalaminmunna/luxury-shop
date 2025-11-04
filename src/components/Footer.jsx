import { Link } from "react-router";

import { Newsletter } from "./Newsletter";
import { Facebook } from "./Icons/facebook";
import { Twitter } from "./Icons/twitter";
import { Instagram } from "./Icons/instagram";
import { Github } from "./Icons/github";
import { Visa } from "./Icons/visa";
import { Mastercard } from "./Icons/mastercard";
import { Paypal } from "./Icons/paypal";
import { Applepay } from "./Icons/applepay";
import { Googlepay } from "./Icons/googlepay";

export const Footer = () => {
  const headerClass =
    "text-base font-medium tracking-[3px] uppercase mb-1.5 md:mb-4";
  const childClass = "text-base font-normal mb-2 text-black/60";

  return (
    <>
      <div className="mb-[-95px] z-1 relative px-4 xl:px-0">
        <div className="container mx-auto">
          <Newsletter />
        </div>
      </div>
      <div className="bg-[#f0f0f0] pt-[125px] md:pt-[145px] px-4 xl:px-0">
        {/* <div className="bg-white flex-1 pt-[170px]"></div> */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-6 xl:gap-y-0 pb-[50px] border-b border-black/10">
            <div className="lg:col-span-4 col-span-12">
              <h1 className="font-bold text-[28px] md:text-[32px] mb-2.5 md:mb-5 leading-none">
                SHOP.CO
              </h1>
              <p className="mb-7 font-normal text-sm text-black/60 leading-[22px] lg:w-3xs">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="size-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white"
                >
                  <Twitter />
                </Link>
                <Link
                  href="#"
                  className="size-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="size-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white"
                >
                  <Instagram />
                </Link>
                <Link
                  href="#"
                  className="size-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white"
                >
                  <Github />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 xl:col-span-2 col-span-6">
              <p className={headerClass}>Company</p>
              <ul>
                <Link>
                  <li className={childClass}>About</li>
                </Link>
                <Link>
                  <li className={childClass}>Features</li>
                </Link>
                <Link>
                  <li className={childClass}>Works</li>
                </Link>
                <Link>
                  <li className={childClass}>Career</li>
                </Link>
              </ul>
            </div>
            <div className="lg:col-span-4 xl:col-span-2 col-span-6">
              <p className={headerClass}>Help</p>
              <ul>
                <Link>
                  <li className={childClass}>Customer Support</li>
                </Link>
                <Link>
                  <li className={childClass}>Delivery Details</li>
                </Link>
                <Link>
                  <li className={childClass}>Terms & Conditions</li>
                </Link>
                <Link>
                  <li className={childClass}>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div className="lg:col-span-4 xl:col-span-2 col-span-6">
              <p className={headerClass}>FAQ</p>
              <ul>
                <Link>
                  <li className={childClass}>Account</li>
                </Link>
                <Link>
                  <li className={childClass}>Manage Deliveries</li>
                </Link>
                <Link>
                  <li className={childClass}>Orders</li>
                </Link>
                <Link>
                  <li className={childClass}>Payments</li>
                </Link>
              </ul>
            </div>
            <div className="lg:col-span-4 xl:col-span-2 col-span-6">
              <p className={headerClass}>Resources</p>
              <ul>
                <Link>
                  <li className={childClass}>Free eBooks</li>
                </Link>
                <Link>
                  <li className={childClass}>Development Tutorial</li>
                </Link>
                <Link>
                  <li className={childClass}>How to - Blog</li>
                </Link>
                <Link>
                  <li className={childClass}>Youtube Playlist</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:mt-3 mt-4">
            <p className="lg:leading-0 text-sm font-normal text-black/60 lg:mt-5 mb-3 lg:mb-24 text-center">
              Shop.co © 2000-2025, All Rights Reserved
            </p>
            <div className="flex pb-[58px] lg:pb-0 justify-between">
              <Link>
                <Visa />
              </Link>
              <Link>
                <Mastercard />
              </Link>
              <Link>
                <Paypal />
              </Link>
              <Link>
                <Applepay />
              </Link>
              <Link>
                <Googlepay />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
