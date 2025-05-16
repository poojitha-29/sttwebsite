
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  description: string;
  className?: string;
}

const DestinationCard = ({
  image,
  title,
  location,
  rating,
  description,
  className
}: DestinationCardProps) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "w-4 h-4", 
        i < rating ? "text-yellow-400" : "text-gray-300"
      )}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  ));

  return (
    <div className={cn("destination-card group", className)}>
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-white">
        <div className="flex items-center text-yellow-500 mb-2">
          {stars}
        </div>
        <p className="text-travel-primary font-medium mb-1">{location}</p>
        <h3 className="text-xl font-bold mb-2 group-hover:text-travel-secondary transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
