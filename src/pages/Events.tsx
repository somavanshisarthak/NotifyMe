
import { useState, useCallback } from "react";
import { events } from "@/data/mockData";
import EventCard from "@/components/EventCard";
import EventFiltersComponent from "@/components/EventFilters";
import { Event, EventFilters } from "@/types/types";

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = useCallback((filters: EventFilters) => {
    let result = [...events];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.location.toLowerCase().includes(searchLower) ||
          event.organizer.toLowerCase().includes(searchLower)
      );
    }

    // Apply type filter
    if (filters.types.length > 0) {
      result = result.filter((event) => filters.types.includes(event.type));
    }

    // Apply price filter
    result = result.filter(
      (event) => event.price >= filters.minPrice && event.price <= filters.maxPrice
    );

    setFilteredEvents(result);
  }, []);

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Events</h1>
          <p className="text-muted-foreground">
            Discover and connect with events from around the world
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <EventFiltersComponent 
            onFilterChange={handleFilterChange} 
            isMobileFiltersOpen={isMobileFiltersOpen}
            toggleMobileFilters={toggleMobileFilters}
          />

          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
              </p>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
