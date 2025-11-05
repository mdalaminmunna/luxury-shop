import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <div className="bg-black rounded-[20px] ">
      <div className="lg:flex justify-between items-center md:py-8 pt-8 pb-7 md:px-16 px-4">
        <p className="uppercase font-integral-bold text-3xl md:text-[40px] text-white leading-[45px] md:max-w-xl mb-7 lg:mb-0">
          Stay Upto Date About Our Latest Offers
        </p>
        <div className="md:w-80 flex flex-col md:gap-y-3.5 gap-y-3">
          <div className="w-full relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="pl-13 bg-white border-0 text-black text-sm md:text-base placeholder:font-normal focus:border-black rounded-full px-4 py-4 w-full placeholder:text-black/40 md:placeholder:text-base placeholder:text-sm"
            />
          </div>
          <button
            type="button"
            className="text-black bg-white border-0 rounded-full
        px-4 py-4 cursor-pointer font-satoshi-medium w-full md:text-base text-sm"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};
