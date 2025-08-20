import React from 'react';
import { Users, Lightbulb, Leaf, Trophy } from 'lucide-react';

export const pillars = [
  {
    title: 'Innovation & Engineering',
    description:
      'Participants design and build buggies that are fast, efficient, safe, and technically sound. Creativity in design and practical application of engineering principles are at the core of this competition.',
    icon: () => <Lightbulb className="w-10 h-10 text-[#1A73E8]" />,
  },
  {
    title: 'Sustainability & Responsibility',
    description:
      'We promote energy-efficient technologies, eco-friendly materials, and responsible practices, ensuring a sustainable future for motorsports and engineering innovation.',
    icon: () => <Leaf className="w-10 h-10 text-[#C3F73A]" />,
  },
  {
    title: 'Learning & Development',
    description:
      'Hands-on experience in engineering, teamwork, leadership, and problem-solving prepares participants to tackle real-world challenges in their careers and beyond.',
    icon: () => <Trophy className="w-10 h-10 text-[#FF5C00]" />,
  },
  {
    title: 'Community & Passion',
    description:
      'Mechathon connects students, professionals, and motorsport enthusiasts. We believe in sharing knowledge, building networks, and celebrating passion for engineering and racing.',
    icon: () => <Users className="w-10 h-10 text-[#D72638]" />,
  },
];
