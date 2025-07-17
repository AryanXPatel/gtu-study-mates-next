"use client";

import React, { useState } from "react";
import { SemesterCard } from "./semester-card";
import { SEMESTERS } from "@/config/semester-config";
import { FadeIn, FadeInStagger } from "./fade-in";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useSemesterNavigation } from "@/hooks/use-semester-navigation";
import {
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface SemesterSelectionProps {
  className?: string;
}

/**
 * Premium SemesterSelection component with sophisticated design
 * Inspired by modern SaaS landing pages with elegant gradients and animations
 */
const SemesterSelection: React.FC<SemesterSelectionProps> = ({
  className = "",
}) => {
  const { navigateToSemester, isNavigating, navigationError, clearError } =
    useSemesterNavigation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [sectionRef] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    freezeOnceVisible: true,
  });

  const handleSemesterClick = async (semesterNumber: number) => {
    setActiveCard(semesterNumber);
    await navigateToSemester(semesterNumber);
    setTimeout(() => setActiveCard(null), 300);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`relative w-full bg-gradient-to-b from-[#020917] via-[#0a1628] to-[#020917] py-24 px-4 md:px-8 lg:px-12 overflow-hidden ${className}`}
      aria-labelledby="semester-selection-title"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Header Section */}
        <FadeIn threshold={0.1} duration={800} delay={100}>
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-white/80 font-medium tracking-wide">
                Academic Excellence
              </span>
              <ArrowRight size={14} className="text-white/60" />
            </div>

            {/* Main Title */}
            <h2
              id="semester-selection-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Navigate Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mt-2">
                Academic Journey
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Choose your semester to unlock specialized resources, connect with
              peers, and access curated study materials designed for your
              academic success.
            </p>

            {/* Feature Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp size={18} className="text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    8 Semesters
                  </div>
                  <div className="text-white/50 text-xs">Complete Coverage</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Users size={18} className="text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    Study Groups
                  </div>
                  <div className="text-white/50 text-xs">Peer Learning</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Award size={18} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    Resources
                  </div>
                  <div className="text-white/50 text-xs">Premium Content</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Error Display */}
        {navigationError && (
          <FadeIn>
            <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-white rounded-xl p-6 mb-8 text-center max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-red-400 font-medium">
                  Navigation Error
                </span>
              </div>
              <p className="text-white/80 mb-4">{navigationError}</p>
              <button
                onClick={clearError}
                className="text-sm text-red-400 hover:text-red-300 transition-colors underline"
                aria-label="Dismiss error message"
              >
                Dismiss
              </button>
            </div>
          </FadeIn>
        )}

        {/* Premium Semester Grid */}
        <FadeInStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          duration={600}
          staggerDelay={100}
          threshold={0.05}
          rootMargin="0px 0px -50px 0px"
          role="grid"
          aria-label="Semester selection grid"
        >
          {SEMESTERS.map((semester, index) => (
            <div
              key={semester.number}
              className="flex justify-center"
              role="gridcell"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SemesterCard
                semesterNumber={semester.number}
                glowColor={semester.glowColor}
                icon={semester.icon}
                onClick={handleSemesterClick}
                className="w-full max-w-xs transform hover:scale-105 transition-all duration-300"
                isActive={activeCard === semester.number}
                isLoading={isNavigating && activeCard === semester.number}
              />
            </div>
          ))}
        </FadeInStagger>

        {/* Bottom CTA Section */}
        <FadeIn threshold={0.1} duration={600} delay={800}>
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <GraduationCap size={18} className="text-blue-400" />
              <span className="text-white/70 text-sm">
                Each semester builds upon the previous one
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { SemesterSelection };
