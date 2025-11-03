import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <div className="container mx-auto flex bg-black rounded-[20px] justify-between items-center absolute mt-20">
      <p
        className="uppercase font-integral-bold text-[40px] text-white py-[43px] pl-16
      mr-[212px] leading-[45px]"
      >
        Stay Upto Date About <br /> Our Latest Offers
      </p>
      <div className="mr-16">
        <div className="flex items-center max-w-xl relative">
          <Mail size={20} className="absolute left-4 opacity-40 mb-4" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[349px] pl-13 bg-white border-0 text-base placeholder:font-normal focus:border-black rounded-full px-4 py-4 mb-4"
          />
        </div>
        <button
          type="button"
          className="text-black w-[349px] bg-white border-0 text-base rounded-full
        px-4 py-4 cursor-pointer font-medium"
        >
          Subcribe to Newsletter
        </button>
      </div>
    </div>
  );
};
