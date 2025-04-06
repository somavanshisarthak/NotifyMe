
import { events } from "@/data/mockData";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="py-0">
        <div className="container mx-auto px-4">
          <FeaturedEvents 
            title="Featured Events" 
            description="Discover top events from our community" 
            events={featuredEvents.slice(0, 4)} 
          />
          
          <FeaturedEvents 
            title="Upcoming Events" 
            description="Don't miss these upcoming opportunities" 
            events={upcomingEvents.slice(0, 4)} 
          />
        </div>
      </div>
      
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to host your own event?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant community of event organizers and reach thousands of potential attendees.
            Registration is quick, easy, and free!
          </p>
          <Link to="/event-registration">
            <Button size="lg">Register Your Event</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
