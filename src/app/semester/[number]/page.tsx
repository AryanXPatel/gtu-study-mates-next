"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEMESTERS } from "@/config/semester-config";

interface SemesterPageProps {
  params: Promise<{
    number: string;
  }>;
}

/**
 * Dynamic semester page component
 * Validates semester number and displays appropriate content
 */
const SemesterPage: React.FC<SemesterPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const semesterNumber = parseInt(resolvedParams.number, 10);

  // Validate semester number - must be between 1 and 8
  if (isNaN(semesterNumber) || semesterNumber < 1 || semesterNumber > 8) {
    notFound();
  }

  // Find the semester configuration
  const semester = SEMESTERS.find((s) => s.number === semesterNumber);

  if (!semester) {
    notFound();
  }

  const Icon = semester.icon;

  return (
    <div className="min-h-screen bg-[#020917] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon size={64} className="mx-auto mb-4 text-white/80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Semester {semesterNumber}
            </h1>
            <p className="text-xl text-white/80">Welcome to {semester.label}</p>
          </div>

          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Course Content Coming Soon
            </h2>
            <p className="text-white/70 mb-6">
              This semester page is under development. Course materials,
              assignments, and resources will be available here soon.
            </p>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                       rounded-lg font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterPage;
