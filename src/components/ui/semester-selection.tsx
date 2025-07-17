"use client";

import React, { useState } from "react";
import { SemesterCard } from "./semester-card";
import { SEMESTERS } from "@/config/semester-config";
import { FadeIn, FadeInStagger } from "./fade-in";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useSemesterNavigation } from "@/hooks/use-semester-navigation";

interface SemesterSelectionProps {
  className?: string;
}

/**
 * SemesterSelection component that displays a grid of semester cards
 * Implements responsive layouts for desktop (4x2), tablet (2x4), and mobile (1x8)
 * Includes scroll-based animations when the section enters the viewport
 * Uses enhanced navigation with loading states and error handling
 */
const SemesterSelection: React.FC<SemesterSelectionProps> = ({
  className = "",
}) => {
  const { navigateToSemester, isNavigating, navigationError, clearError } =
    useSemesterNavigation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [sectionRef] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px", // Trigger animation slightly before the section is fully visible
    freezeOnceVisible: true,
  });

  // Handle navigation when a semester card is clicked
  const handleSemesterClick = async (semesterNumber: number) => {
    setActiveCard(semesterNumber);
    await navigateToSemester(semesterNumber);
    // Reset active card after navigation completes or fails
    setTimeout(() => setActiveCard(null), 300);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`w-full bg-[#020917] py-16 px-4 md:px-8 lg:px-12 ${className}`}
      aria-labelledby="semester-selection-title"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn threshold={0.1} duration={800} delay={100}>
          <h2
            id="semester-selection-title"
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Select Your Semester
          </h2>
        </FadeIn>

        {/* Error message display */}
        {navigationError && (
          <div
            className="bg-red-500/20 border border-red-500/50 text-white rounded-lg p-4 mb-6 text-center"
            role="alert"
          >
            <p>{navigationError}</p>
            <button
              onClick={clearError}
              className="text-sm underline mt-2 text-white/80 hover:text-white"
              aria-label="Dismiss error message"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Responsive grid layout with staggered fade-in animation */}
        <FadeInStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          duration={600}
          staggerDelay={100}
          threshold={0.05}
          rootMargin="0px 0px -50px 0px"
          role="grid"
          aria-label="Semester selection grid"
        >
          {SEMESTERS.map((semester) => (
            <div
              key={semester.number}
              className="flex justify-center"
              role="gridcell"
            >
              <SemesterCard
                semesterNumber={semester.number}
                glowColor={semester.glowColor}
                icon={semester.icon}
                onClick={handleSemesterClick}
                className="w-full max-w-xs"
                isActive={activeCard === semester.number}
                isLoading={isNavigating && activeCard === semester.number}
              />
            </div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export { SemesterSelection };
