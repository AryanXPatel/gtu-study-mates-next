import { GlowCard } from "@/components/ui/spotlight-card";
import { BookOpen, Calculator, Code, Lightbulb } from "lucide-react";

export function SpotlightDemo() {
  return (
    <div className="w-full min-h-screen flex flex-row items-center justify-center gap-10 p-8 bg-black">
      <GlowCard glowColor="blue" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <BookOpen className="w-12 h-12 mb-4 text-blue-400" />
          <h3 className="text-xl font-bold mb-2">Study Materials</h3>
          <p className="text-gray-300 text-center text-sm">
            Access comprehensive notes and resources for all GTU subjects
          </p>
        </div>
      </GlowCard>

      <GlowCard glowColor="purple" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <Calculator className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-xl font-bold mb-2">Practice Problems</h3>
          <p className="text-gray-300 text-center text-sm">
            Solve previous year questions and mock tests
          </p>
        </div>
      </GlowCard>

      <GlowCard glowColor="green" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <Code className="w-12 h-12 mb-4 text-green-400" />
          <h3 className="text-xl font-bold mb-2">Lab Practicals</h3>
          <p className="text-gray-300 text-center text-sm">
            Complete lab manuals and practical solutions
          </p>
        </div>
      </GlowCard>

      <GlowCard glowColor="orange" size="md">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <Lightbulb className="w-12 h-12 mb-4 text-orange-400" />
          <h3 className="text-xl font-bold mb-2">Tips & Tricks</h3>
          <p className="text-gray-300 text-center text-sm">
            Expert strategies to excel in GTU examinations
          </p>
        </div>
      </GlowCard>
    </div>
  );
}

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 bg-black">
      <GlowCard glowColor="blue" size="md">
        <div className="flex items-center justify-center h-full text-white">
          <span>Card 1</span>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple" size="md">
        <div className="flex items-center justify-center h-full text-white">
          <span>Card 2</span>
        </div>
      </GlowCard>
      <GlowCard glowColor="green" size="md">
        <div className="flex items-center justify-center h-full text-white">
          <span>Card 3</span>
        </div>
      </GlowCard>
    </div>
  );
}
