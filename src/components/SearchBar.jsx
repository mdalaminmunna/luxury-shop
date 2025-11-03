import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ onSearch }) {
  // const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch(query);
  };

  // useEffect(() => {
  //   if (open && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [open]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="hidden lg:flex items-center flex-1 max-w-xl relative">
        <Search size={20} className="absolute left-4 opacity-40" />
        <input
          // ref={inputRef}
          // type="text"
          // value={query}
          // onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for products..."
          className="w-full pl-13 bg-[#f0f0f0] border-0 rounded-full px-4 py-4 text-base placeholder:font-normal focus:border-black"
        />
      </div>
      <div className="lg:hidden flex-1 max-w-sm">
        {isOpen ? (
          <div className="flex items-center gap-2 relative">
            <Search size={20} className="absolute left-3" />
            <input
              placeholder="Search..."
              className="w-full pl-10 pr-9 h-10 bg-[#f0f0f0] border-0 rounded-full text-base placeholder:font-normal focus:border-black"
              autoFocus
            />
            <button
              className="absolute right-1 p-2 hover:bg-red-500 rounded-full "
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <button
            className="ml-auto p-2 hover:bg-red-500 rounded-full "
            onClick={() => setIsOpen(true)}
          >
            <Search size={20} />
          </button>
        )}
      </div>
    </form>
  );
}
