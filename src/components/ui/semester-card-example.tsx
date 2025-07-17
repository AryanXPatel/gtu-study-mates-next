"use client";

import React from "react";
import { SemesterCard } from "./semester-card";
import {
  BookOpen,
  Calculator,
  Code,
  Database,
  FileText,
  Lightbulb,
  Network,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Example component showing how to use SemesterCard with different icons and colors
 */
const SemesterCardExample: React.FC = () => {
  const router = useRouter();

  // Example handler for semester navigation
  const handleSemesterClick = (semesterNumber: number) => {
    router.push(`/semester/${semesterNumber}`);
  };

  // Example semester icons
  const semesterIcons = [
    BookOpen, // Semester 1
    Calculator, // Semester 2
    Code, // Semester 3
    Database, // Semester 4
    FileText, // Semester 5
    Lightbulb, // Semester 6
    Network, // Semester 7
    Rocket, // Semester 8
  ];

  // Example semester colors
  const semesterColors: Array<"blue" | "purple" | "green" | "red" | "orange"> =
    [
      "blue", // Semester 1
      "purple", // Semester 2
      "green", // Semester 3
      "red", // Semester 4
      "orange", // Semester 5
      "blue", // Semester 6
      "purple", // Semester 7
      "green", // Semester 8
    ];

  return (
    <div className="grid grid-cols-4 gap-6 p-8 bg-[#020917]">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((semesterNumber) => (
        <SemesterCard
          key={semesterNumber}
          semesterNumber={semesterNumber}
          glowColor={semesterColors[semesterNumber - 1]}
          icon={semesterIcons[semesterNumber - 1]}
          onClick={handleSemesterClick}
          className="mb-4"
        />
      ))}
    </div>
  );
};

export { SemesterCardExample };
