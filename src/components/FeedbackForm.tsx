
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RatingStats {
  [key: number]: number;
}

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const [ratingStats, setRatingStats] = useState<RatingStats>({
    1: 2,
    2: 4,
    3: 6,
    4: 10,
    5: 18
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update rating stats
    setRatingStats((prev) => ({
      ...prev,
      [rating]: (prev[rating] || 0) + 1
    }));
    
    // Show success message and reset form
    setSubmitted(true);
    setName("");
    setEmail("");
    setRating(5);
    setComments("");
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Calculate total ratings for percentage bar
  const totalRatings = Object.values(ratingStats).reduce((sum, count) => sum + count, 0);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
          
          {submitted && (
            <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg">
              Thank you for your feedback! Your insights help us improve our services.
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-primary"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-primary"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating*
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={cn(
                        "w-8 h-8 transition-colors",
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Your Comments*
              </label>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-primary"
                placeholder="Share your experience with us..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-travel-primary hover:bg-travel-primary/90 text-white py-3 rounded-lg"
            >
              Submit Feedback
            </Button>
          </div>
        </form>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6">Customer Satisfaction</h3>
        
        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-4">
              <div className="flex items-center w-24">
                <span className="font-medium mr-2">{star}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full",
                    star >= 4 ? "bg-green-500" : star >= 3 ? "bg-yellow-500" : "bg-red-500"
                  )}
                  style={{ width: `${((ratingStats[star] || 0) / totalRatings) * 100}%` }}
                />
              </div>
              
              <div className="w-12 text-right text-sm font-medium">
                {ratingStats[star] || 0}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">Average Rating</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">
                {(Object.entries(ratingStats).reduce((sum, [star, count]) => sum + Number(star) * count, 0) / totalRatings).toFixed(1)}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          
          <p className="text-gray-600">
            Based on {totalRatings} customer reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
