
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Explore The World With Us",
    subtitle: "Embark on a journey of discovery, adventure, and unforgettable experiences"
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Your Perfect Travel Partner",
    subtitle: "Plan your dream vacation with expert guidance and exclusive deals"
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Discover Hidden Treasures",
    subtitle: "Uncover the world's most breathtaking destinations with us"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      {/* Slider */}
      <div className="relative h-full w-full">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 hero-image-overlay transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.url}
              alt={`Travel destination ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover animate-zoom-in"
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {slideImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            {slideImages[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button className="btn-travel-primary">
              Explore Packages
            </Button>
            <Button variant="outline" className="btn-travel-outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
