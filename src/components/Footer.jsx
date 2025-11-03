import { Facebook } from "lucide-react";
import { Newsletter } from "./Newsletter";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] flex-1">
      <div className="container mx-auto">
        <Newsletter />
      </div>
      <div className="bg-white flex-1 pt-[170px]"></div>
      <div className="container mx-auto pt-[130px] pb-[50px] border-b border-black/10">
        <div>
          <h1 className="font-bold text-[32px] mb-[25px]">SHOP.CO</h1>
          <p className="mb-[35px] font-normal text-sm text-black/60 leading-[22px]">
            We have clothes that suits your style and <br /> which you`re proud
            to wear. From <br /> women to men.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black"
            >
              <Twitter size={15} fill="white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black"
            >
              <Facebook size={15} fill="white" />
              {/* <img className="" src="logo-fb.svg" alt="Facebook Logo" /> */}
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black"
            >
              <Instagram size={15} fill="white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white hover:bg-black"
            >
              <Github size={15} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
