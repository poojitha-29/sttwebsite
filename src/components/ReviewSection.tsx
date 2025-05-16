
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Review {
  text: string;
  author: string;
  avatar?: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  className?: string;
}

const ReviewSection = ({ reviews, className }: ReviewSectionProps) => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className={cn("relative", className)}>
      {/* Background decoration */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-travel-accent/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-travel-primary/20 rounded-full blur-lg"></div>

      <div className="glass-card p-8 md:p-12 relative z-10">
        <div className="text-center mb-8">
          <h4 className="text-4xl font-bold mb-2">What Our Travelers Say</h4>
          <div className="w-20 h-1 bg-travel-primary mx-auto"></div>
        </div>
        
        <div className="relative h-64">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 p-4",
                index === currentReview ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-travel-primary/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-lg md:text-xl text-gray-700 mb-4 italic text-center">"{review.text}"</p>
              
              <div className="flex items-center justify-center">
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                )}
                <p className="font-medium text-travel-dark">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                index === currentReview
                  ? "bg-travel-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
