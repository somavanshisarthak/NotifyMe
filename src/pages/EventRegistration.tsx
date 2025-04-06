
import EventForm from "@/components/EventForm";

const EventRegistration = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Register Your Event</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Share your event with our NotifyMe community of passionate attendees.
            Fill in the details below to get started.
          </p>
        </div>

        <EventForm />
      </div>
    </div>
  );
};

export default EventRegistration;
