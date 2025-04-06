
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { TeamMember } from "@/types/types";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <CardDescription>{member.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm">{member.bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
