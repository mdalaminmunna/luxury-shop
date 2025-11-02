import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch(query);
  };

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative w-full pr-5">
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products..."
            className="w-full pl-12 py-3.5 bg-white border rounded-full border-gray-200 text-base focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all duration-300 shadow-sm hover:shadow-md lg:placeholder:text-base md:placeholder:text-xs"
          />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close search" : "Open search"}
          onClick={() => setOpen((event) => !event)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {open ? <X className="p-5" /> : <Search className="p-2" />}
        </button>
      </div>
    </form>
    // <form onSubmit={handleSubmit} className="relative w-full">
    //   {/* Search Container */}
    //   <div
    //     className={`absolute md:static top-0 left-0 w-full bg-white md:bg-transparent transition-all duration-500 ease-in-out ${
    //       open
    //         ? "opacity-100 scale-100 z-50 shadow-md"
    //         : "opacity-0 md:opacity-100 md:scale-100 scale-95 pointer-events-none md:pointer-events-auto"
    //     }`}
    //   >
    //     <div className="relative w-full max-w-2xl mx-auto px-5 py-3.5 md:py-0">
    //       {/* Input */}
    //       <input
    //         ref={inputRef}
    //         type="text"
    //         value={query}
    //         onChange={(e) => setQuery(e.target.value)}
    //         placeholder="Search for products..."
    //         className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-full border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
    //       />

    //       {/* Search Icon (inside input) */}
    //       <Search
    //         className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black"
    //         strokeWidth={2.5}
    //       />
    //     </div>
    //   </div>

    //   {/* Toggle Button (Search / X) */}
    //   <button
    //     type="button"
    //     aria-expanded={open}
    //     aria-label={open ? "Close search" : "Open search"}
    //     onClick={() => setOpen((prev) => !prev)}
    //     className="absolute right-0 md:right-auto md:static text-black hover:text-gray-700 transition-transform duration-300 ease-in-out"
    //   >
    //     {open ? (
    //       <X className="w-6 h-6 md:w-5 md:h-5" strokeWidth={2.5} />
    //     ) : (
    //       <Search className="w-6 h-6 md:w-5 md:h-5" strokeWidth={2.5} />
    //     )}
    //   </button>
    // </form>
  );
}
