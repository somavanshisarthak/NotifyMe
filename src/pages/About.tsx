
import { teamMembers } from "@/data/mockData";
import TeamCard from "@/components/TeamCard";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About VibeSpace</h1>
          <p className="text-lg text-muted-foreground">
            Connecting communities through meaningful events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              VibeSpace was created with a simple but powerful mission: to connect people through
              events that matter. We believe that meaningful connections happen when people
              gather around shared interests and passions.
            </p>
            <p className="text-muted-foreground">
              Our platform empowers event organizers to reach their audience and provides
              attendees with opportunities to discover events that inspire, educate, and
              entertain.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              We envision a world where every community has access to events that foster
              growth, innovation, and connection. VibeSpace aims to be the bridge that
              brings people together, transcending geographical boundaries.
            </p>
            <p className="text-muted-foreground">
              By providing a platform that's intuitive, accessible, and community-focused,
              we're working towards a future where finding and participating in meaningful
              events is seamless for everyone.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Our Community</h2>
          <p className="text-center text-muted-foreground mb-6">
            Whether you're an event organizer looking to reach a wider audience or an
            attendee searching for your next great experience, VibeSpace is here for you.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-vibePurple-600 hover:text-vibePurple-800 font-medium">
              Join our Discord
            </a>
            <a href="#" className="text-vibePurple-600 hover:text-vibePurple-800 font-medium">
              Follow us on Twitter
            </a>
            <a href="#" className="text-vibePurple-600 hover:text-vibePurple-800 font-medium">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
