import React, { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

/**
 * FadeIn component that animates its children when they enter the viewport
 * Uses Intersection Observer API for performance
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  React.useEffect(() => {
    if (isIntersecting && ref.current) {
      // Use CSS transitions for animation
      const element = ref.current as HTMLElement;
      element.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;
      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";
    }
  }, [isIntersecting, ref, delay, duration]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{ opacity: 0, transform: "translateY(20px)" }} // Start invisible and offset
    >
      {children}
    </div>
  );
};

/**
 * FadeInStagger component that applies staggered fade-in animations to its children
 */
export const FadeInStagger: React.FC<
  Omit<FadeInProps, "delay"> & {
    staggerDelay?: number;
    role?: string;
    "aria-label"?: string;
  }
> = ({
  children,
  className = "",
  duration = 600,
  threshold = 0.1,
  rootMargin = "0px",
  staggerDelay = 100,
  role,
  "aria-label": ariaLabel,
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  React.useEffect(() => {
    if (isIntersecting && ref.current) {
      // Get all direct children of the container
      const elements = Array.from(ref.current.children);

      // Animate each child with a staggered delay using CSS transitions
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const delay = index * staggerDelay;
        htmlElement.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;
        htmlElement.style.opacity = "1";
        htmlElement.style.transform = "translateY(0px)";
      });
    }
  }, [isIntersecting, ref, duration, staggerDelay]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      role={role}
      aria-label={ariaLabel}
    >
      {React.Children.map(children, (child) => (
        <div style={{ opacity: 0, transform: "translateY(20px)" }}>{child}</div>
      ))}
    </div>
  );
};
