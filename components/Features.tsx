import React from "react";
import FeatureCard from "./FeatureCard";
import TypographyComponent from "components/Preline/Typography";
import { FaChalkboardTeacher, FaBook, FaPaintBrush, FaPuzzlePiece, FaAppleAlt, FaGraduationCap } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaChalkboardTeacher,
      title: "Experienced Teachers",
      description: "Our teachers are highly qualified and experienced in early childhood education.",
    },
    {
      icon: FaBook,
      title: "Interactive Learning",
      description: "Engaging and interactive learning activities to foster curiosity and love for learning.",
    },
    {
      icon: FaPaintBrush,
      title: "Creative Arts",
      description: "Encouraging creativity through various art projects and activities.",
    },
    {
      icon: FaPuzzlePiece,
      title: "Play-Based Learning",
      description: "Learning through play to develop social and cognitive skills.",
    },
    {
      icon: FaAppleAlt,
      title: "Healthy Snacks",
      description: "Nutritious and healthy snacks provided to keep children energized.",
    },
    {
      icon: FaGraduationCap,
      title: "School Readiness",
      description: "Preparing children for a smooth transition to kindergarten.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-12 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <TypographyComponent variant="display-h2" fontWeight="bold" text="Features" className="text-gray-900 dark:text-white mb-4" />
          <TypographyComponent variant="text-md" fontWeight="semibold" text="  Highlight the wonderful features of our preschool using beautifully designed custom cards with icons. You can use any
            icon you want." className="text-gray-900 dark:text-white mb-4" />
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 text-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
