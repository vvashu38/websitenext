import Link from "next/link";
import TypographyComponent from "./Preline/Typography";

export default function Hero() {
  return (
    <section
      className="relative text-center "
      style={{ 
        backgroundImage: "url(assets/bg/bg_white_patterns.jpg)",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0"></div> {/* Optional: Dark Overlay */}
      <div className="relative z-10 py-20 px-56">
        <TypographyComponent className="font-sans" variant="display-h1" text="Little Millenium" fontWeight="bold" />
        <p className="text-xl font-sans text-black mb-12 font-light">
          First of its kind, a school that nurtures your child's future.
        </p>
      </div>
    </section>
  );
}
