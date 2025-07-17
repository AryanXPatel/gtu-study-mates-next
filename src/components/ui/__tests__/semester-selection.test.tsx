import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterSelection } from "../semester-selection";
import { SEMESTERS } from "@/config/semester-config";
import userEvent from "@testing-library/user-event";

// Mock the Next.js router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock the intersection observer hook
jest.mock("@/hooks/use-intersection-observer", () => ({
  useIntersectionObserver: () => {
    // Return a ref and true to simulate element in viewport
    const ref = { current: document.createElement("div") };
    return [ref, true];
  },
}));

// Mock the motion library
jest.mock("motion", () => ({
  animate: jest.fn(),
}));

describe("SemesterSelection", () => {
  it("renders the component with title", () => {
    render(<SemesterSelection />);

    // Check if the title is rendered
    expect(screen.getByText("Select Your Semester")).toBeInTheDocument();
  });

  it("renders all 8 semester cards", () => {
    render(<SemesterSelection />);

    // Check if all semester cards are rendered
    SEMESTERS.forEach((semester) => {
      expect(
        screen.getByText(`Semester ${semester.number}`)
      ).toBeInTheDocument();
      expect(screen.getByText(semester.number.toString())).toBeInTheDocument();
    });
  });

  it("has proper ARIA attributes for accessibility", () => {
    render(<SemesterSelection />);

    // Check section ARIA attributes
    const section = screen.getByRole("region", {
      name: "Select Your Semester",
    });
    expect(section).toBeInTheDocument();

    // Check grid ARIA attributes
    const grid = screen.getByRole("grid", { name: "Semester selection grid" });
    expect(grid).toBeInTheDocument();

    // Check gridcell ARIA attributes
    const gridCells = screen.getAllByRole("gridcell");
    expect(gridCells).toHaveLength(8);
  });

  it("applies responsive grid classes", () => {
    render(<SemesterSelection />);

    const grid = screen.getByRole("grid");
    expect(grid).toHaveClass("grid");
    expect(grid).toHaveClass("grid-cols-1");
    expect(grid).toHaveClass("md:grid-cols-2");
    expect(grid).toHaveClass("lg:grid-cols-4");
  });

  it("includes animation components for scroll-based effects", () => {
    const { container } = render(<SemesterSelection />);

    // The FadeIn component should wrap the title
    const titleWrapper = screen
      .getByText("Select Your Semester")
      .closest("div");
    expect(titleWrapper).toHaveStyle({ opacity: "0" }); // Initial state before animation

    // The FadeInStagger component should wrap the grid
    const gridWrapper = screen.getByRole("grid");
    expect(gridWrapper).toBeInTheDocument();

    // Each semester card should be wrapped in a div with initial opacity 0
    const cardWrappers = container.querySelectorAll(
      '[role="gridcell"] > div > div'
    );
    cardWrappers.forEach((wrapper) => {
      expect(wrapper).toHaveStyle({ opacity: "0" });
    });
  });
});
