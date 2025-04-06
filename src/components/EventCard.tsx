
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Event } from "@/types/types";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

const EventCard = ({ event, featured }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
  };

  // Dynamically choose badge color based on event type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'default';
      case 'workshop':
        return 'outline';
      case 'conference':
        return 'secondary';
      case 'competition':
        return 'destructive';
      case 'meetup':
        return 'default';
      default:
        return 'outline';
    }
  };

  return (
    <Link to={`/events/${event.id}`}>
      <Card className={`overflow-hidden card-hover h-full ${featured ? 'border-primary shadow-md' : ''}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-primary">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader className="p-3 pb-1">
          <div className="flex justify-between items-start gap-1">
            <h3 className="text-base font-semibold line-clamp-1">{event.title}</h3>
            <Badge variant={getBadgeVariant(event.type)} className="capitalize text-xs">
              {event.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-1 pb-1">
          <p className="text-muted-foreground text-xs line-clamp-2 mb-2">{event.description}</p>
          <div className="flex flex-col space-y-1 text-xs">
            <div className="flex items-center text-muted-foreground">
              <Calendar size={12} className="mr-1" />
              <span>{formatDate(event.date)} • {event.time}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin size={12} className="mr-1" />
              <span className="truncate">{event.location}</span>
            </div>
            {event.attendees && (
              <div className="flex items-center text-muted-foreground">
                <Users size={12} className="mr-1" />
                <span>{event.attendees} attendees</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-3 pt-1 flex justify-between items-center border-t">
          <span className="text-sm font-medium">{formatPrice(event.price)}</span>
          <span className="text-xs text-muted-foreground">By {event.organizer}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
