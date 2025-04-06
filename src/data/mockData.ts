
import { Event, TeamMember, Message } from '../types/types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Innovators Hackathon 2025',
    description: 'Join us for a 48-hour coding marathon where developers, designers, and innovators collaborate to build cutting-edge solutions.',
    date: '2025-05-15',
    time: '09:00 AM',
    location: 'Innovation Hub, San Francisco',
    organizer: 'Tech Community SF',
    organizerId: 'org1',
    type: 'hackathon',
    price: 0,
    image: '/placeholder.svg',
    featured: true,
    attendees: 250
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    description: 'Learn the latest web development techniques from industry experts in this hands-on workshop.',
    date: '2025-04-20',
    time: '10:00 AM',
    location: 'Digital Learning Center, New York',
    organizer: 'WebDev Masters',
    organizerId: 'org2',
    type: 'workshop',
    price: 49.99,
    image: '/placeholder.svg',
    attendees: 75
  },
  {
    id: '3',
    title: 'AI & Machine Learning Conference',
    description: 'Explore the future of AI with keynotes, panels, and networking opportunities with leading experts.',
    date: '2025-06-10',
    time: '08:30 AM',
    location: 'Tech Convention Center, Seattle',
    organizer: 'AI Research Group',
    organizerId: 'org3',
    type: 'conference',
    price: 199.99,
    image: '/placeholder.svg',
    featured: true,
    attendees: 500
  },
  {
    id: '4',
    title: 'Mobile App Development Bootcamp',
    description: 'Intensive 3-day bootcamp covering all aspects of mobile app development for iOS and Android.',
    date: '2025-05-03',
    time: '09:30 AM',
    location: 'Startup Campus, Austin',
    organizer: 'App Builders Network',
    organizerId: 'org4',
    type: 'workshop',
    price: 299.99,
    image: '/placeholder.svg',
    attendees: 60
  },
  {
    id: '5',
    title: 'Competitive Programming Challenge',
    description: 'Test your coding skills against other programmers in this fast-paced competition.',
    date: '2025-04-25',
    time: '02:00 PM',
    location: 'University Tech Center, Boston',
    organizer: 'Code Competitors',
    organizerId: 'org5',
    type: 'competition',
    price: 15,
    image: '/placeholder.svg',
    attendees: 150
  },
  {
    id: '6',
    title: 'Design Systems Meetup',
    description: 'Monthly gathering for designers and developers to discuss design systems and UI/UX best practices.',
    date: '2025-04-18',
    time: '06:30 PM',
    location: 'Creative Space, Portland',
    organizer: 'DesignOps Collective',
    organizerId: 'org6',
    type: 'meetup',
    price: 0,
    image: '/placeholder.svg',
    attendees: 85
  },
  {
    id: '7',
    title: 'Blockchain Developer Summit',
    description: 'Deep dive into blockchain technology, smart contracts, and decentralized applications.',
    date: '2025-07-12',
    time: '10:00 AM',
    location: 'Fintech Tower, Miami',
    organizer: 'Blockchain Alliance',
    organizerId: 'org7',
    type: 'conference',
    price: 249.99,
    image: '/placeholder.svg',
    featured: true,
    attendees: 320
  },
  {
    id: '8',
    title: 'Women in Tech Workshop Series',
    description: 'A series of workshops focused on supporting and empowering women in technology fields.',
    date: '2025-05-22',
    time: '01:00 PM',
    location: 'Community Center, Chicago',
    organizer: 'TechWomen Collective',
    organizerId: 'org8',
    type: 'workshop',
    price: 25,
    image: '/placeholder.svg',
    attendees: 110
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in event management and tech, Alex founded VibeSpace to revolutionize how communities connect through events.',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Samira Patel',
    role: 'Lead Developer',
    bio: 'Samira brings 8 years of full-stack development expertise, focusing on creating seamless user experiences and robust backend systems.',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Community Manager',
    bio: 'A community building expert, Marcus ensures that VibeSpace provides a welcoming environment for all event organizers and attendees.',
    image: '/placeholder.svg'
  }
];

export const messages: Message[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Emma Davis',
    userImage: '/placeholder.svg',
    content: 'Has anyone attended the Web Development Workshop before? Is it suitable for beginners?',
    timestamp: '2025-04-06T10:23:15Z'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Jayden Smith',
    userImage: '/placeholder.svg',
    content: 'I went last year, it was great for beginners! They cover the basics well and the instructors are really helpful.',
    timestamp: '2025-04-06T10:25:45Z'
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Sophia Kim',
    userImage: '/placeholder.svg',
    content: 'I\'m organizing a meetup for UI/UX designers in Atlanta next month. Would anyone be interested in joining?',
    timestamp: '2025-04-06T10:30:22Z'
  },
  {
    id: '4',
    userId: 'user4',
    userName: 'Noah Garcia',
    userImage: '/placeholder.svg',
    content: 'Excited for the Hackathon next week! Looking for team members who are familiar with React and Node.js.',
    timestamp: '2025-04-06T10:35:10Z'
  },
  {
    id: '5',
    userId: 'user5',
    userName: 'Olivia Taylor',
    userImage: '/placeholder.svg',
    content: 'Just registered for the AI Conference. Can\'t wait to learn about the latest advancements in machine learning!',
    timestamp: '2025-04-06T10:40:18Z'
  }
];
