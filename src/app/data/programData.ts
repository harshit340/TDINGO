interface Program {
  title: string;
  level: string;
  batches: number;
  description: string;
  heroImage: string;
  discussions: Discussion[];
}

interface Discussion {
  id: number;
  user: string;
  role: string;
  time: string;
  message: string;
  avatar: string;
}

export const programsData: Record<string, Program> = {
  "smash-101": {
    title: "Smash 101",
    level: "Beginner",
    batches: 4,
    description:
      "Perfect for beginners who want to learn badminton from scratch. This comprehensive program covers basic footwork, grip techniques, serving, and fundamental strokes. Our experienced coaches will guide you through proper form and technique while building your confidence on the court. You'll learn essential rules, court positioning, and basic strategies to get you started in this exciting sport.",
    heroImage: "/images/smash101.png",
    discussions: [
      {
        id: 1,
        user: "@Sarah",
        role: "Player",
        time: "2 hours ago",
        message: "Great introduction to badminton! The coaches are very patient with beginners.",
        avatar: "/images/smash101.png",
      },
      {
        id: 2,
        user: "@Coach_Mike",
        role: "Coach",
        time: "1 day ago",
        message: "Remember to practice your footwork at home. Next session we'll focus on clear shots!",
        avatar: "/images/smash101.png",
      },
      {
        id: 3,
        user: "@Jenny",
        role: "Player",
        time: "2 days ago",
        message: "When do we start learning smash techniques?",
        avatar: "/images/smash101.png",
      },
    ],
  },
  "smash-102": {
    title: "Smash 102",
    level: "Intermediate",
    batches: 6,
    description:
      "Building on the fundamentals, Smash 102 introduces intermediate techniques and strategies. You'll master advanced footwork patterns, learn powerful smash techniques, improve your net play, and develop tactical awareness. This program focuses on consistency, accuracy, and building the stamina needed for competitive play. Perfect for players who have completed Smash 101 or have basic badminton experience.",
    heroImage: "/image/smash101.png", 
    discussions: [
      {
        id: 1,
        user: "@Alex",
        role: "Player",
        time: "3 hours ago",
        message: "The smash technique training is intense but really effective!",
        avatar: "/images/smash101.png",
      },
      {
        id: 2,
        user: "@Coach_Lisa",
        role: "Coach",
        time: "1 day ago",
        message: "Great progress everyone! Next week we'll work on doubles strategies.",
        avatar: "/images/smash101.png",
      },
      {
        id: 3,
        user: "@David",
        role: "Player",
        time: "2 days ago",
        message: "My backhand has improved so much since starting this program!",
        avatar: "/images/smash101.png",
      },
    ],
  },
  "smash-103": {
    title: "Smash 103",
    level: "Advanced",
    batches: 8,
    description:
      "Elite training program for advanced players aiming for competitive excellence. Master complex shot combinations, advanced tactical play, mental conditioning, and match strategies. This intensive program includes video analysis, personalized coaching, and preparation for tournaments. Designed for players with solid intermediate skills who want to take their game to the professional level.",
    heroImage: "/placeholder.svg?height=400&width=800&text=Smash+103+Training",
    discussions: [
      {
        id: 1,
        user: "@ProPlayer_Tom",
        role: "Player",
        time: "1 hour ago",
        message: "The video analysis sessions are incredibly helpful for improving technique.",
        avatar: "/images/smash101.png",
      },
      {
        id: 2,
        user: "@Coach_Expert",
        role: "Coach",
        time: "4 hours ago",
        message: "Tournament preparation starts next week. Make sure you're ready for intensive drills!",
        avatar: "/images/smash101.png",
      },
      {
        id: 3,
        user: "@Emma",
        role: "Player",
        time: "1 day ago",
        message: "The mental conditioning sessions have really helped my competitive mindset.",
        avatar: "/images/smash101.png",
      },
      {
        id: 4,
        user: "@Marcus",
        role: "Player",
        time: "2 days ago",
        message: "When is the next tournament? I feel ready to compete!",
        avatar: "/images/smash101.png",
      },
    ],
  },
};
