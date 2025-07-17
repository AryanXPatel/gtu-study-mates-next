import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SemesterCard } from "../semester-card";
import { BookOpen } from "lucide-react";

// Mock the GlowCard component since we're only testing the SemesterCard functionality
jest.mock("../spotlight-card", () => ({
  GlowCard: ({ children, glowColor }) => (
    <div data-testid="glow-card" data-glow-color={glowColor}>
      {children}
    </div>
  ),
}));

describe("SemesterCard", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with correct semester number and content", () => {
    render(
      <SemesterCard
        semesterNumber={3}
        glowColor="green"
        icon={BookOpen}
        onClick={mockOnClick}
      />
    );

    // Check if semester number is displayed
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Semester 3")).toBeInTheDocument();

    // Check if the GlowCard is rendered with correct color
    const glowCard = screen.getByTestId("glow-card");
    expect(glowCard).toHaveAttribute("data-glow-color", "green");
  });

  it("calls onClick handler when clicked", () => {
    render(
      <SemesterCard
        semesterNumber={2}
        glowColor="purple"
        icon={BookOpen}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledWith(2);
  });

  it("calls onClick handler when Enter key is pressed", () => {
    render(
      <SemesterCard
        semesterNumber={1}
        glowColor="blue"
        icon={BookOpen}
        onClick={mockOnClick}
      />
    );

    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(mockOnClick).toHaveBeenCalledWith(1);
  });

  it("calls onClick handler when Space key is pressed", () => {
    render(
      <SemesterCard
        semesterNumber={4}
        glowColor="red"
        icon={BookOpen}
        onClick={mockOnClick}
      />
    );

    fireEvent.keyDown(screen.getByRole("button"), { key: " " });
    expect(mockOnClick).toHaveBeenCalledWith(4);
  });

  it("has proper accessibility attributes", () => {
    render(
      <SemesterCard
        semesterNumber={5}
        glowColor="orange"
        icon={BookOpen}
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Navigate to Semester 5");
    expect(button).toHaveAttribute("tabIndex", "0");
  });
});
