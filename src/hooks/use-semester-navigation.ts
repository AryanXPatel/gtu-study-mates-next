"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * Custom hook for semester navigation with loading states and error handling
 */
export const useSemesterNavigation = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigationError, setNavigationError] = useState<string | null>(null);

  /**
   * Navigate to a semester page with loading state management
   */
  const navigateToSemester = useCallback(
    async (semesterNumber: number) => {
      // Validate semester number
      if (
        !Number.isInteger(semesterNumber) ||
        semesterNumber < 1 ||
        semesterNumber > 8
      ) {
        setNavigationError(
          `Invalid semester number: ${semesterNumber}. Must be between 1 and 8.`
        );
        return false;
      }

      try {
        setIsNavigating(true);
        setNavigationError(null);

        // Use router.push for client-side navigation
        router.push(`/semester/${semesterNumber}`);

        // Small delay to show loading state
        await new Promise((resolve) => setTimeout(resolve, 100));

        return true;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Navigation failed";
        setNavigationError(
          `Failed to navigate to semester ${semesterNumber}: ${errorMessage}`
        );
        return false;
      } finally {
        setIsNavigating(false);
      }
    },
    [router]
  );

  /**
   * Clear any navigation errors
   */
  const clearError = useCallback(() => {
    setNavigationError(null);
  }, []);

  return {
    navigateToSemester,
    isNavigating,
    navigationError,
    clearError,
  };
};
