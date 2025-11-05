import { useState, useRef, useEffect } from "react";

import { Search, X } from "lucide-react";

export function SearchBar({ onSearch, isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch(query);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="hidden lg:flex items-center max-w-xl relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for products..."
          className="pl-12 bg-[#f0f0f0] border-0 text-black text-sm md:text-base placeholder:font-normal focus:border-black rounded-full px-4 py-4 w-full placeholder:text-black/40 md:placeholder:text-base placeholder:text-sm h-12"
        />
      </div>

      <div className="lg:hidden flex-1 max-w-sm">
        {isOpen && (
          <div className="flex items-center gap-2 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className="w-full px-9 h-10 bg-[#f0f0f0] border-0 rounded-full text-base placeholder:font-normal focus:border-black"
              autoFocus
            />
            <button
              type="button"
              className="absolute right-1 p-2 hover:bg-red-500 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
