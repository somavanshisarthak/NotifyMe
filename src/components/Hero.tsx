
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-skyBlue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blueAccent-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div>
              <Badge className="mb-4">🔔 The event platform for communities</Badge>
              <h1 className="leading-tight mb-3">
                Where Events <br />
                <span className="gradient-text">Come Alive</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover and create amazing events. Connect with like-minded people
                and build thriving communities, all in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Events
                </Button>
              </Link>
              <Link to="/event-registration">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Register Your Event
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center">
                <div className="bg-skyBlue-100 p-2 rounded-full mr-3">
                  <Calendar className="h-5 w-5 text-skyBlue-500" />
                </div>
                <div>
                  <p className="font-medium">500+</p>
                  <p className="text-sm text-muted-foreground">Events hosted</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-skyBlue-100 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-skyBlue-500" />
                </div>
                <div>
                  <p className="font-medium">15,000+</p>
                  <p className="text-sm text-muted-foreground">Community members</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-150">
            <div className="aspect-square md:aspect-auto md:h-[500px] bg-gradient-to-br from-skyBlue-500 to-blueAccent-500 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Event collage"
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold text-center px-4">
                  Create Unforgettable<br />Experiences
                </h2>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card rounded-lg shadow-lg p-3 w-48 animate-slide-up">
              <div className="flex items-center">
                <div className="bg-skyBlue-100 dark:bg-skyBlue-900/30 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <Calendar className="h-5 w-5 text-skyBlue-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">Next Event</p>
                  <p className="text-xs text-muted-foreground">April 20, 2025</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-card rounded-lg shadow-lg p-3 w-48 animate-slide-up animation-delay-300">
              <div className="flex items-center">
                <div className="bg-skyBlue-100 dark:bg-skyBlue-900/30 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-skyBlue-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">Join Community</p>
                  <p className="text-xs text-muted-foreground">Connect Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple badge component for the hero section
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-skyBlue-100 text-skyBlue-800 dark:bg-skyBlue-900/30 dark:text-skyBlue-300 ${className}`}>
    {children}
  </span>
);

export default Hero;
