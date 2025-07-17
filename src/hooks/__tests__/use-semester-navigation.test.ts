import { renderHook, act } from "@testing-library/react";
import { useSemesterNavigation } from "../use-semester-navigation";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("useSemesterNavigation", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useSemesterNavigation());

    expect(result.current.isNavigating).toBe(false);
    expect(result.current.navigationError).toBeNull();
    expect(typeof result.current.navigateToSemester).toBe("function");
    expect(typeof result.current.clearError).toBe("function");
  });

  it("should handle valid semester navigation", async () => {
    const { result } = renderHook(() => useSemesterNavigation());

    await act(async () => {
      await result.current.navigateToSemester(3);
    });

    // Should briefly set isNavigating to true then back to false
    expect(result.current.isNavigating).toBe(false);
    expect(result.current.navigationError).toBeNull();
  });

  it("should handle invalid semester number", async () => {
    const { result } = renderHook(() => useSemesterNavigation());

    await act(async () => {
      await result.current.navigateToSemester(9);
    });

    expect(result.current.isNavigating).toBe(false);
    expect(result.current.navigationError).toContain("Invalid semester number");
  });

  it("should clear navigation errors", async () => {
    const { result } = renderHook(() => useSemesterNavigation());

    await act(async () => {
      await result.current.navigateToSemester(10);
    });

    expect(result.current.navigationError).not.toBeNull();

    act(() => {
      result.current.clearError();
    });

    expect(result.current.navigationError).toBeNull();
  });
});
