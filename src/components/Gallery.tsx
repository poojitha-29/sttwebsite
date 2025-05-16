
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: string[];
  className?: string;
}

const Gallery = ({ images, className }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-travel-primary transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-h-[80vh] w-auto mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
