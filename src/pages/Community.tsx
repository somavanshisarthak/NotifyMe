
import ChatInterface from "@/components/ChatInterface";

const Community = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect with fellow event-goers and organizers. Share ideas,
            ask questions, and build relationships.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChatInterface />
          
          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Be respectful and considerate of others</li>
              <li>• No spam, ads, or self-promotion without permission</li>
              <li>• Keep discussions relevant to events and community topics</li>
              <li>• Respect privacy and do not share others' personal information</li>
              <li>• Report any inappropriate behavior to moderators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
