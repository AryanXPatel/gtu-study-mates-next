"use client";

import React, { useState } from "react";
import {
  LucideIcon,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";

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
 * Premium SemesterCard with sophisticated design and individual animations
 * Features elegant gradients, micro-interactions, and professional typography
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
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      onClick(semesterNumber);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && !isLoading) {
      e.preventDefault();
      onClick(semesterNumber);
    }
  };

  // Color mappings for premium gradients
  const colorConfig = {
    blue: {
      gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/25",
      accent: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    purple: {
      gradient: "from-purple-500/20 via-purple-600/10 to-transparent",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/25",
      accent: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    green: {
      gradient: "from-green-500/20 via-green-600/10 to-transparent",
      border: "border-green-500/30",
      glow: "shadow-green-500/25",
      accent: "text-green-400",
      bg: "bg-green-500/10",
    },
    red: {
      gradient: "from-red-500/20 via-red-600/10 to-transparent",
      border: "border-red-500/30",
      glow: "shadow-red-500/25",
      accent: "text-red-400",
      bg: "bg-red-500/10",
    },
    orange: {
      gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/25",
      accent: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  };

  const config = colorConfig[glowColor];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to Semester ${semesterNumber}`}
      aria-disabled={isLoading}
      className={`group relative cursor-pointer transition-all duration-500 ease-out transform
        ${!isLoading ? "hover:scale-[1.02] hover:-translate-y-1" : ""} 
        ${isActive ? "scale-[1.02] -translate-y-1" : ""}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
        animate-fade-in-up opacity-0
        ${className}`}
      style={{
        animationDelay: `${semesterNumber * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Premium Card Container */}
      <div
        className={`relative h-48 w-full bg-gradient-to-br ${config.gradient} 
        backdrop-blur-sm border ${config.border} rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        ${
          isHovered || isActive
            ? `shadow-2xl ${config.glow}`
            : "shadow-lg shadow-black/20"
        }
        ${isHovered ? "border-white/20" : ""}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl z-20">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <div
                className="absolute inset-0 w-8 h-8 border-2 border-transparent border-t-white/60 rounded-full animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "0.8s",
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
          {/* Top Badge */}
          <div
            className={`absolute top-4 left-4 px-2 py-1 ${
              config.bg
            } backdrop-blur-sm 
            border border-white/10 rounded-lg transition-all duration-300
            ${isHovered ? "scale-110" : ""}`}
          >
            <GraduationCap size={12} className={`${config.accent}`} />
          </div>

          {/* Action Arrow */}
          <div
            className={`absolute top-4 right-4 p-2 bg-white/5 backdrop-blur-sm 
            border border-white/10 rounded-lg transition-all duration-300 transform
            ${
              isHovered
                ? "scale-110 bg-white/10 translate-x-1 -translate-y-1"
                : ""
            }`}
          >
            <ArrowUpRight size={14} className="text-white/60" />
          </div>

          {/* Main Icon */}
          <div
            className={`relative mb-4 p-4 ${
              config.bg
            } backdrop-blur-sm rounded-2xl
            transition-all duration-500 transform
            ${isHovered ? "scale-110 rotate-3" : ""}`}
          >
            <Icon
              size={32}
              className={`${config.accent} transition-all duration-300`}
            />

            {/* Icon Sparkle Effect */}
            {isHovered && (
              <div className="absolute -top-1 -right-1">
                <Sparkles
                  size={16}
                  className={`${config.accent} animate-pulse`}
                />
              </div>
            )}
          </div>

          {/* Semester Number */}
          <div
            className={`text-5xl font-bold text-white mb-2 transition-all duration-300
            ${isHovered ? "scale-110" : ""}`}
          >
            {semesterNumber}
          </div>

          {/* Semester Label */}
          <div className="text-white/80 font-medium text-sm tracking-wide mb-2">
            Semester {semesterNumber}
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-20 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${config.gradient.replace(
                "to-transparent",
                `to-${glowColor}-400`
              )} 
                transition-all duration-700 ease-out`}
              style={{
                width: `${(semesterNumber / 8) * 100}%`,
                transform: isHovered ? "scaleX(1.1)" : "scaleX(1)",
              }}
            ></div>
          </div>

          {/* Hover Text */}
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 
            text-xs text-white/60 transition-all duration-300
            ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            Click to explore
          </div>
        </div>

        {/* Animated Border */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500
          ${isHovered ? `bg-gradient-to-r ${config.gradient} opacity-20` : ""}`}
        ></div>
      </div>
    </div>
  );
};

export { SemesterCard };
