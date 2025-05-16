
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={cn(
              "font-display text-2xl font-bold transition-colors",
              isScrolled ? "text-travel-dark" : "text-white"
            )}>
              Sangeetha <span className="text-travel-primary">Holidays</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About us", "Destination", "Packages", "Testimonials", "Contact Us"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  "font-medium text-sm hover:text-travel-primary transition-colors",
                  isScrolled ? "text-travel-dark" : "text-white"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <Button 
            className="hidden md:flex bg-travel-primary hover:bg-travel-primary/90 text-white rounded-full px-6"
          >
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className={cn(
                "w-6 h-6 transition-colors",
                isScrolled ? "text-travel-dark" : "text-white"
              )}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {["Home", "About us", "Destination", "Packages", "Testimonials", "Contact Us"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={cn(
                    "font-medium text-base py-2",
                    isScrolled ? "text-travel-dark" : "text-white"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button 
                className="bg-travel-primary hover:bg-travel-primary/90 text-white w-full rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
