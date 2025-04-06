
export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  organizerId: string;
  type: EventType;
  price: number;
  image: string;
  featured?: boolean;
  attendees?: number;
}

export type EventType = 'hackathon' | 'workshop' | 'conference' | 'competition' | 'meetup' | 'other';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  timestamp: string;
}

export interface EventFilters {
  search: string;
  types: EventType[];
  minPrice: number;
  maxPrice: number;
}
