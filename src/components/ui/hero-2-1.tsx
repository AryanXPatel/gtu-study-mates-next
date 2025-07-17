"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GTULogo } from "@/components/ui/gtu-logo";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/gtu-study-hero.mp4" type="video/mp4" />
      </video>

      {/* SVG structure maintained without colorful gradients */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-2">
        {/* Keeping SVG structure but removing colorful gradients */}
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 z-3 bg-noise opacity-20"></div>

      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-4"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
          <div className="flex items-center">
            <GTULogo
              size="md"
              className="text-white [&_path]:!fill-white [&_svg]:text-white"
            />
            <span className="ml-2 text-xl font-bold text-white">
              GTU Study Mates
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <NavItem label="Use Cases" hasDropdown />
              <NavItem label="Products" hasDropdown />
              <NavItem label="Resources" hasDropdown />
              <NavItem label="Pricing" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu with animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GTULogo
                    size="md"
                    className="text-white [&_path]:!fill-white [&_svg]:text-white"
                  />
                  <span className="ml-2 text-xl font-bold text-white">
                    GTU Study Mates
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="mt-8 flex flex-col space-y-6">
                <MobileNavItem label="Use Cases" />
                <MobileNavItem label="Products" />
                <MobileNavItem label="Resources" />
                <MobileNavItem label="Pricing" />
                <div className="pt-4">
                  <button className="w-full justify-start border border-gray-700 text-white">
                    Log in
                  </button>
                </div>
                <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                  Get Started For Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full glass-effect grain-overlay px-4 py-2">
          <span className="text-sm font-medium text-white">
            Join the revolution today!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            From Struggling to Topping - Your GTU Transformation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Everything you need to excel in GTU - organized, updated, and always
            accessible
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search semester subjects..."
                className="h-12 w-80 rounded-full glass-effect grain-overlay px-6 text-base text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 bg-transparent"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20" />

            {/* Hero Image */}
            {/* <img
              src="null"
              alt="Hero Image"
              className="relative w-full h-auto shadow-md grayscale-100 rounded"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="flex items-center text-sm text-gray-300 hover:text-white">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  );
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  );
}

export { Hero2 };
