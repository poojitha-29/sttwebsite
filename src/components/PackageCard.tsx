
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  location: string;
  price: string;
  className?: string;
}

const PackageCard = ({
  image,
  title,
  description,
  duration,
  groupSize,
  location,
  price,
  className
}: PackageCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow", className)}>
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <p className="inline-block bg-travel-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
            {price}
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-sm">{groupSize}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <Button className="w-full bg-travel-secondary hover:bg-travel-secondary/90 text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
