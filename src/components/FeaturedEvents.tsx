
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import { Event } from "@/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedEventsProps {
  title: string;
  description?: string;
  events: Event[];
  showViewAll?: boolean;
}

const FeaturedEvents = ({ title, description, events, showViewAll = true }: FeaturedEventsProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('events-container-' + title.replace(/\s+/g, '-').toLowerCase());
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-6 px-2">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            {description && (
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
          {showViewAll && (
            <div className="flex space-x-2 mt-2 md:mt-0">
              <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => scroll('left')}>
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => scroll('right')}>
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        <div 
          id={`events-container-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="flex overflow-x-auto gap-3 pb-3 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {events.map((event) => (
            <div key={event.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] flex-shrink-0">
              <EventCard event={event} featured={event.featured} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
