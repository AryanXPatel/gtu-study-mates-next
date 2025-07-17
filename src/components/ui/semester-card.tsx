"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { GlowCard } from "./spotlight-card";

interface SemesterCardProps {
  semesterNumber: number;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
  icon: LucideIcon;
  onClick: (semesterNumber: number) => void;
  className?: string;
  isActive?: boolean;
  isLoading?: boolean;
}

/**
 * SemesterCard component that wraps GlowCard with semester-specific content
 * Provides interactive navigation to semester content
 */
const SemesterCard: React.FC<SemesterCardProps> = ({
  semesterNumber,
  glowColor,
  icon: Icon,
  onClick,
  className = "",
  isActive = false,
  isLoading = false,
}) => {
  // Handle click event
  const handleClick = () => {
    if (!isLoading) {
      onClick(semesterNumber);
    }
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && !isLoading) {
      e.preventDefault();
      onClick(semesterNumber);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Navigate to Semester ${semesterNumber}`}
      aria-disabled={isLoading}
      className={`cursor-pointer transition-transform ${
        !isLoading ? "hover:scale-105 focus:scale-105" : ""
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
        isActive ? "scale-105" : ""
      } ${className}`}
    >
      <GlowCard glowColor={glowColor} size="md">
        <div className="flex flex-col items-center justify-center h-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl z-10">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div
            className={`text-white/80 mb-2 ${isLoading ? "opacity-50" : ""}`}
          >
            <Icon size={32} aria-hidden="true" />
          </div>
          <div
            className={`text-4xl font-bold text-white mb-1 ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            {semesterNumber}
          </div>
          <div
            className={`text-white/90 text-center ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            Semester {semesterNumber}
          </div>
        </div>
      </GlowCard>
    </div>
  );
};

export { SemesterCard };
