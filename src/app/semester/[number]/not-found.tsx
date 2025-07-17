import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

/**
 * Not found page for invalid semester routes
 */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020917] text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <AlertCircle size={64} className="mx-auto mb-6 text-red-400" />
        <h1 className="text-4xl font-bold mb-4">Semester Not Found</h1>
        <p className="text-white/70 mb-8">
          The semester you&apos;re looking for doesn&apos;t exist. Please select
          a valid semester (1-8).
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                     rounded-lg font-medium transition-colors duration-200"
          >
            ← Back to Home
          </Link>

          <div className="text-sm text-white/50">
            Valid semesters: 1, 2, 3, 4, 5, 6, 7, 8
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
