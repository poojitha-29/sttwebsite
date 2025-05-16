
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import Gallery from "@/components/Gallery";
import ReviewSection from "@/components/ReviewSection";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  // Popular destinations data
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Taj Mahal",
      location: "Agra",
      rating: 5,
      description: "A symbol of love and India's most iconic monument."
    },
    {
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ff081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Golden Temple",
      location: "Amritsar",
      rating: 5,
      description: "Spiritual and cultural center for Sikhs, glowing in gold."
    },
    {
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Jaipur City Palace",
      location: "Jaipur",
      rating: 4,
      description: "Experience the royal heritage of the Pink City."
    }
  ];

  // Tour packages data
  const packages = [
    {
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Experience The Great Holiday On Beach",
      description: "Enjoy pristine beaches, crystal-clear waters, and unforgettable sunsets on our exclusive beach getaway package.",
      duration: "7D/6N",
      groupSize: "pax: 10",
      location: "Malaysia",
      price: "$750 / per person"
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Summer Holiday To The Oxolotan River",
      description: "Adventure through lush rainforests and cruise down the scenic Oxolotan River with our special summer package.",
      duration: "7D/6N",
      groupSize: "pax: 10",
      location: "Malaysia",
      price: "$520 / per person"
    },
    {
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Santorini Island's Weekend Vacation",
      description: "Escape to the breathtaking beauty of Santorini for a weekend of exploration, relaxation, and Mediterranean cuisine.",
      duration: "7D/6N",
      groupSize: "pax: 10",
      location: "Malaysia",
      price: "$660 / per person"
    }
  ];

  // Gallery images
  const galleryImages = [
    "/images/WhatsApp Image 2025-04-13 at 11.39.49_f1a472bd.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.49_a176d5bb.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.48_e2b0e893.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.47_b6a1f470.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.43_45557d28.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.37_dcd15de5.jpg",
    "/images/WhatsApp Image 2025-04-13 at 11.39.37_ae9960fd.jpg"
  ];

  // Reviews data
  const reviews = [
    {
      text: "Absolutely unforgettable experience! The team at Sangeetha Holidays went above and beyond to ensure our trip was perfect. Will definitely travel with them again.",
      author: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      text: "Super organized, friendly staff, and beautiful destinations! Every aspect of our journey was carefully planned and executed. Highly recommend!",
      author: "Rohan Mehta",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Best trip ever. Everything was taken care of perfectly. The accommodations were exceptional and the local guides were knowledgeable and friendly.",
      author: "Anjali Verma",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us Section */}
      <section className="py-20 bg-gray-50" id="about-us">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-travel-accent/30"></div>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="About Sangeetha Holidays"
                  className="rounded-xl shadow-xl relative z-10"
                />
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <p className="inline-block text-travel-primary font-medium mb-1">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Travel Partner Since 2005</h2>
                <div className="w-20 h-1 bg-travel-secondary mb-6"></div>
              </div>
              
              <p className="text-gray-600 mb-6">
                At Sangeetha Holidays, we believe that travel is more than just visiting new places—it's about immersing yourself in different cultures, creating lasting memories, and growing as an individual.
              </p>
              
              <p className="text-gray-600 mb-8">
                Our mission is to inspire and empower travelers to explore the world with confidence, curiosity, and respect for local cultures and environments. Whether you're an experienced globetrotter or planning your first international trip, our resources are designed to help you discover, plan, and embark on journeys that will stay with you for a lifetime.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-travel-primary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expertise</h4>
                    <p className="text-sm text-gray-600">Professional travel advisors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-travel-primary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Personalized</h4>
                    <p className="text-sm text-gray-600">Tailored travel experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-travel-primary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Support</h4>
                    <p className="text-sm text-gray-600">24/7 customer assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-travel-primary/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Value</h4>
                    <p className="text-sm text-gray-600">Best price guarantees</p>
                  </div>
                </div>
              </div>
              
              <Button className="btn-travel-secondary">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section className="py-20" id="destination">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-travel-primary font-medium mb-1">Uncover Places</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the vibrant culture, majestic architecture, and serene landscapes of India's most popular destinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                image={destination.image}
                title={destination.title}
                location={destination.location}
                rating={destination.rating}
                description={destination.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="btn-travel-primary">
              More Destinations
            </Button>
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-20 bg-gray-50" id="packages">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-travel-primary font-medium mb-1">Popular Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Checkout Our Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated travel packages designed to give you the perfect balance of adventure, relaxation, and authentic experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                image={pkg.image}
                title={pkg.title}
                description={pkg.description}
                duration={pkg.duration}
                groupSize={pkg.groupSize}
                location={pkg.location}
                price={pkg.price}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="btn-travel-primary">
              View All Packages
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20" id="gallery">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-travel-primary font-medium mb-1">Photo Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photos From Travellers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The memories we built! Browse through our gallery of stunning moments captured by our travelers around the world.
            </p>
          </div>
          
          <Gallery images={galleryImages} />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <ReviewSection reviews={reviews} />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20" id="contact-us">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-travel-primary font-medium mb-1">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to plan your next adventure? Reach out to our travel experts or share your feedback with us.
            </p>
          </div>
          
          <FeedbackForm />
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-travel-primary to-travel-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
              <p className="text-white/90 text-lg mb-0">
                Book your dream vacation today and create memories that will last a lifetime.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button className="bg-white text-travel-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium">
                Book Your Trip Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-travel-primary text-white p-3 rounded-full shadow-lg hover:bg-travel-primary/90 transition-colors z-40"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
