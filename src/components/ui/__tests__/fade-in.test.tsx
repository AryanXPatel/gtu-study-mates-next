import React from "react";
import { render, screen } from "@testing-library/react";
import { FadeIn, FadeInStagger } from "../fade-in";

// Mock the motion library
jest.mock("motion", () => ({
  animate: jest.fn(),
}));

// Mock the intersection observer hook
jest.mock("@/hooks/use-intersection-observer", () => ({
  useIntersectionObserver: () => {
    // Return a ref and true to simulate element in viewport
    const ref = { current: document.createElement("div") };
    return [ref, true];
  },
}));

describe("FadeIn Component", () => {
  it("renders children correctly", () => {
    render(
      <FadeIn>
        <p>Test content</p>
      </FadeIn>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FadeIn className="test-class">
        <p>Test content</p>
      </FadeIn>
    );

    expect(container.firstChild).toHaveClass("test-class");
  });
});

describe("FadeInStagger Component", () => {
  it("renders children correctly", () => {
    render(
      <FadeInStagger>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </FadeInStagger>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FadeInStagger className="test-class">
        <p>Item 1</p>
      </FadeInStagger>
    );

    expect(container.firstChild).toHaveClass("test-class");
  });
});
