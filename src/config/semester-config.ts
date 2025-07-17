import {
  BookOpen,
  Calculator,
  Code,
  Database,
  Beaker,
  Globe,
  Laptop,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

/**
 * Interface defining the configuration for each semester
 */
export interface SemesterConfig {
  number: number;
  label: string;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
  icon: LucideIcon;
  route: string;
}

/**
 * Configuration array for all 8 semesters
 *
 * Color distribution strategy:
 * - Semesters 1, 5: Blue
 * - Semesters 2, 6: Purple
 * - Semesters 3, 7: Green
 * - Semester 4: Red
 * - Semester 8: Orange
 */
export const SEMESTERS: SemesterConfig[] = [
  {
    number: 1,
    label: "Semester 1",
    glowColor: "blue",
    icon: BookOpen,
    route: "/semester/1",
  },
  {
    number: 2,
    label: "Semester 2",
    glowColor: "purple",
    icon: Calculator,
    route: "/semester/2",
  },
  {
    number: 3,
    label: "Semester 3",
    glowColor: "green",
    icon: Code,
    route: "/semester/3",
  },
  {
    number: 4,
    label: "Semester 4",
    glowColor: "red",
    icon: Database,
    route: "/semester/4",
  },
  {
    number: 5,
    label: "Semester 5",
    glowColor: "blue",
    icon: Globe,
    route: "/semester/5",
  },
  {
    number: 6,
    label: "Semester 6",
    glowColor: "purple",
    icon: Laptop,
    route: "/semester/6",
  },
  {
    number: 7,
    label: "Semester 7",
    glowColor: "green",
    icon: Beaker,
    route: "/semester/7",
  },
  {
    number: 8,
    label: "Semester 8",
    glowColor: "orange",
    icon: Lightbulb,
    route: "/semester/8",
  },
];
