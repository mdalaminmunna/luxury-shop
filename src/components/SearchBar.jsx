import { useState, useRef, useEffect, useCallback } from "react";

import { Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export function SearchBar({ onSearch, isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (onSearch) onSearch(query);
      setShowSuggestions(false);
    },
    [onSearch, query]
  );

  const fetchSuggestions = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery
        )}&limit=5`
      );
      const data = await response.json();
      setSuggestions(data.products || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      if (!query) {
        setSuggestions([]);
        setShowSuggestions(false);
        setLoading(false);
        return;
      }

      (async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(
              query
            )}&limit=5`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setSuggestions(data.products || []);
          setShowSuggestions(true);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("Error fetching suggestions:", err);
            setSuggestions([]);
          }
        } finally {
          setLoading(false);
        }
      })();
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSuggestionClick = (product) => {
    setQuery(product.title);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(product.title);
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) {
      return text;
    }

    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const result = [];

    let start = 0;
    let index;

    while ((index = lowerText.indexOf(lowerQuery, start)) !== -1) {
      result.push(text.slice(start, index));

      result.push(
        <strong key={index}>{text.slice(index, index + query.length)}</strong>
      );

      start = index + query.length;
    }

    result.push(text.slice(start));

    return result;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="lg:block hidden relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => query && setShowSuggestions(true)}
          onKeyDown={(event) => event.key === "Enter" && handleSubmit(event)}
          placeholder="Search for products..."
          className="pl-12 bg-[#f0f0f0] border-0 w-full text-black text-sm md:text-base placeholder:font-normal focus:border-black rounded-full px-4 py-4 placeholder:text-black/40 md:placeholder:text-base placeholder:text-sm h-12"
        />
        {loading && (
          <Loader2
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-black/40"
          />
        )}

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border border-black/10 max-h-96 w-xl overflow-y-auto z-50">
            {suggestions.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                className="flex items-center gap-3 p-3 hover:bg-[#f0f0f0] cursor-pointer transition-colors border-b border-black/5 last:border-0"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-27 h-27"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">
                    {highlightMatch(product.title, query)}
                  </p>
                  <p className="text-sm text-black/60 truncate">
                    {product.category}
                  </p>
                </div>
                <div className="text-sm font-semibold text-black">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        )}

        {showSuggestions && query && suggestions.length === 0 && !loading && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg border border-black/10 p-4 z-50">
            <p className="text-sm text-black/60 text-center">
              No product found for "{query}"
            </p>
          </div>
        )}
      </div>

      <div className="lg:hidden flex-1 max-w-sm">
        <Dialog
          open={isOpen}
          onOpenChange={setIsOpen}
          aria-describedby={undefined}
        >
          <DialogContent
            className="sm:max-w-[425px]"
            aria-describedby={undefined}
          >
            <DialogHeader>
              <DialogTitle>Search for your desired product</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Input placeholder="Search..." />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
}
