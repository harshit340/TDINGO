interface Batch {
  id: number;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  dateRange: string;
  location: string;
  sessions: number;
  capacity: string; 
  description: string;
}

type BatchKey = "smash-101" | "smash-102" | "smash-103";

type BatchesData = Record<BatchKey, Batch[]>;

export const batchesData: BatchesData = {
  "smash-101": [
    {
      id: 1,
      title: "Kids - Mondays 7PM",
      level: "Beginner",
      dateRange: "1st June - 25th July, Every Monday",
      location: "Logan Central QLD, Australia",
      sessions: 8,
      capacity: "16/20",
      description:
        "Beginner level training with professional coaches. Perfect for kids starting their badminton journey.",
    },
    {
      id: 2,
      title: "Kids - Wednesdays 6PM",
      level: "Beginner",
      dateRange: "1st June - 25th July, Every Wednesday",
      location: "Logan Central QLD, Australia",
      sessions: 8,
      capacity: "12/20",
      description:
        "Beginner level training with professional coaches. Focus on basic techniques and fun activities.",
    },
    {
      id: 3,
      title: "Adults - Saturdays 9AM",
      level: "Beginner",
      dateRange: "1st June - 25th July, Every Saturday",
      location: "Logan Central QLD, Australia",
      sessions: 8,
      capacity: "18/20",
      description:
        "Adult beginner classes focusing on fundamentals and fitness.",
    },
    {
      id: 4,
      title: "Teens - Fridays 5PM",
      level: "Beginner",
      dateRange: "1st June - 25th July, Every Friday",
      location: "Logan Central QLD, Australia",
      sessions: 8,
      capacity: "14/20",
      description:
        "Teen-focused beginner training with age-appropriate coaching methods.",
    },
  ],
  "smash-102": [
    {
      id: 1,
      title: "Intermediate - Tuesdays 7PM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Tuesday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "15/18",
      description:
        "Intermediate level training focusing on advanced techniques and competitive strategies.",
    },
    {
      id: 2,
      title: "Intermediate - Thursdays 6PM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Thursday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "12/18",
      description:
        "Advanced footwork and smash techniques for intermediate players.",
    },
    {
      id: 3,
      title: "Weekend Warriors - Sundays 10AM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Sunday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "16/18",
      description:
        "Perfect for working professionals who want to improve their game on weekends.",
    },
    {
      id: 4,
      title: "Doubles Focus - Saturdays 2PM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Saturday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "14/18",
      description:
        "Specialized training focusing on doubles strategies and teamwork.",
    },
    {
      id: 5,
      title: "Evening Express - Wednesdays 8PM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Wednesday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "10/18",
      description:
        "Late evening sessions for busy professionals and students.",
    },
    {
      id: 6,
      title: "Youth Development - Saturdays 4PM",
      level: "Intermediate",
      dateRange: "1st June - 15th August, Every Saturday",
      location: "Logan Central QLD, Australia",
      sessions: 10,
      capacity: "13/18",
      description:
        "Youth-focused intermediate training preparing for competitive play.",
    },
  ],
  "smash-103": [
    {
      id: 1,
      title: "Elite Training - Mondays 6PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Monday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "8/12",
      description:
        "Elite training program for advanced players aiming for competitive excellence.",
    },
    {
      id: 2,
      title: "Tournament Prep - Wednesdays 7PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Wednesday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "10/12",
      description:
        "Intensive tournament preparation with video analysis and mental conditioning.",
    },
    {
      id: 3,
      title: "Pro Development - Fridays 6PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Friday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "6/12",
      description:
        "Professional development program for aspiring competitive players.",
    },
    {
      id: 4,
      title: "Masters Class - Sundays 9AM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Sunday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "9/12",
      description:
        "Master-level training with personalized coaching and advanced tactics.",
    },
    {
      id: 5,
      title: "Singles Specialist - Tuesdays 7PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Tuesday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "7/12",
      description:
        "Specialized singles training focusing on individual excellence and strategy.",
    },
    {
      id: 6,
      title: "Doubles Elite - Thursdays 6PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Thursday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "11/12",
      description:
        "Elite doubles training for advanced partnership strategies.",
    },
    {
      id: 7,
      title: "Competition Ready - Saturdays 8AM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Saturday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "5/12",
      description:
        "Final preparation for competitive tournaments and professional play.",
    },
    {
      id: 8,
      title: "Mental Game - Sundays 3PM",
      level: "Advanced",
      dateRange: "1st June - 30th August, Every Sunday",
      location: "Logan Central QLD, Australia",
      sessions: 12,
      capacity: "8/12",
      description:
        "Advanced mental conditioning and psychological preparation for competition.",
    },
  ],
};
