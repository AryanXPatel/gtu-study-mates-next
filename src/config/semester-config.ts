import {
  Calculator,
  Code,
  Database,
  Lightbulb,
  LucideIcon,
  GraduationCap,
  Cpu,
  Network,
  Brain,
} from "lucide-react";

/**
 * Interface defining the configuration for each semester
 */
export interface SemesterConfig {
  number: number;
  label: string;
  description: string;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
  icon: LucideIcon;
  route: string;
  subjects: string[];
}

/**
 * Premium configuration array for all 8 semesters
 * Each semester has carefully selected icons and descriptions
 *
 * Color distribution strategy for visual harmony:
 * - Semesters 1, 5: Blue (Foundation & Core)
 * - Semesters 2, 6: Purple (Mathematics & Systems)
 * - Semesters 3, 7: Green (Programming & Advanced)
 * - Semester 4: Red (Data & Algorithms)
 * - Semester 8: Orange (Innovation & Projects)
 */
export const SEMESTERS: SemesterConfig[] = [
  {
    number: 1,
    label: "Foundation Semester",
    description: "Building the fundamentals",
    glowColor: "blue",
    icon: GraduationCap,
    route: "/semester/1",
    subjects: ["Mathematics", "Physics", "Programming Basics", "English"],
  },
  {
    number: 2,
    label: "Core Mathematics",
    description: "Mathematical foundations",
    glowColor: "purple",
    icon: Calculator,
    route: "/semester/2",
    subjects: ["Calculus", "Statistics", "Discrete Math", "Data Structures"],
  },
  {
    number: 3,
    label: "Programming Focus",
    description: "Coding and algorithms",
    glowColor: "green",
    icon: Code,
    route: "/semester/3",
    subjects: ["OOP", "Algorithms", "Web Development", "Software Engineering"],
  },
  {
    number: 4,
    label: "Data & Systems",
    description: "Database and system design",
    glowColor: "orange",
    icon: Database,
    route: "/semester/4",
    subjects: [
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    number: 5,
    label: "Advanced Computing",
    description: "Specialized technologies",
    glowColor: "blue",
    icon: Cpu,
    route: "/semester/5",
    subjects: [
      "Computer Architecture",
      "Compiler Design",
      "AI Basics",
      "Mobile Development",
    ],
  },
  {
    number: 6,
    label: "Network & Security",
    description: "Connectivity and protection",
    glowColor: "purple",
    icon: Network,
    route: "/semester/6",
    subjects: [
      "Network Security",
      "Cloud Computing",
      "Distributed Systems",
      "Cryptography",
    ],
  },
  {
    number: 7,
    label: "Emerging Tech",
    description: "Cutting-edge technologies",
    glowColor: "green",
    icon: Brain,
    route: "/semester/7",
    subjects: ["Machine Learning", "Blockchain", "IoT", "Advanced Algorithms"],
  },
  {
    number: 8,
    label: "Innovation Lab",
    description: "Projects and research",
    glowColor: "orange",
    icon: Lightbulb,
    route: "/semester/8",
    subjects: [
      "Final Project",
      "Research Methods",
      "Industry Training",
      "Entrepreneurship",
    ],
  },
];
