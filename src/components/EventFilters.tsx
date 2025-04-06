
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EventFilters, EventType } from "@/types/types";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface EventFiltersProps {
  onFilterChange: (filters: EventFilters) => void;
  isMobileFiltersOpen: boolean;
  toggleMobileFilters: () => void;
}

const EVENT_TYPES: { label: string; value: EventType }[] = [
  { label: "Hackathon", value: "hackathon" },
  { label: "Workshop", value: "workshop" },
  { label: "Conference", value: "conference" },
  { label: "Competition", value: "competition" },
  { label: "Meetup", value: "meetup" },
  { label: "Other", value: "other" },
];

const EventFiltersComponent = ({ 
  onFilterChange, 
  isMobileFiltersOpen, 
  toggleMobileFilters 
}: EventFiltersProps) => {
  const [filters, setFilters] = useState<EventFilters>({
    search: "",
    types: [],
    minPrice: 0,
    maxPrice: 500,
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleTypeToggle = (type: EventType) => {
    setFilters((prevFilters) => {
      const types = prevFilters.types.includes(type)
        ? prevFilters.types.filter((t) => t !== type)
        : [...prevFilters.types, type];
      return { ...prevFilters, types };
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      types: [],
      minPrice: 0,
      maxPrice: 500,
    });
  };

  const filterContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-8"
          />
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Event Type</h4>
        <div className="space-y-2">
          {EVENT_TYPES.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type.value}`}
                checked={filters.types.includes(type.value)}
                onCheckedChange={() => handleTypeToggle(type.value)}
              />
              <label
                htmlFor={`type-${type.value}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium">Price Range</h4>
          <span className="text-sm text-muted-foreground">
            ${filters.minPrice} - ${filters.maxPrice === 500 ? "500+" : filters.maxPrice}
          </span>
        </div>
        <Slider
          defaultValue={[filters.minPrice, filters.maxPrice]}
          min={0}
          max={500}
          step={5}
          value={[filters.minPrice, filters.maxPrice]}
          onValueChange={handlePriceChange}
          className="my-6"
        />
      </div>

      <div className="pt-4">
        <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop filters */}
      <div className="hidden md:block sticky top-24 w-60 h-fit">
        {filterContent}
      </div>

      {/* Mobile filter toggle button */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <Button 
          onClick={toggleMobileFilters} 
          className="shadow-lg rounded-full h-14 w-14 p-0 flex items-center justify-center"
        >
          <SlidersHorizontal size={24} />
        </Button>
      </div>

      {/* Mobile filters */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden overflow-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Filters</h3>
              <Button variant="ghost" size="icon" onClick={toggleMobileFilters}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {filterContent}
            <div className="mt-6">
              <Button onClick={toggleMobileFilters} className="w-full">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventFiltersComponent;
