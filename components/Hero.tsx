import Link from "next/link";
import CarouselComponent from "./carousel/CarouselComponent";
import TypographyComponent from "./Preline/Typography";

const images = [
  { src: "/./assets/bg/a1.jpg", alt: "First Slide", title: "Preschool Fun", caption: "Discover the joy of learning at our preschool." },
  { src: "/./assets/bg/a2.jpg", alt: "Second Slide", title: "Creative Activities", caption: "Engage in creative activities that inspire young minds." },
  { src: "/./assets/bg/a3.jpg", alt: "Third Slide", title: "Safe Environment", caption: "A safe and nurturing environment for your child." },
];


export default function Hero() {
  return (
    <div className="mx-auto">
    <CarouselComponent images={images} />
  </div>
    // <section
    //   className="relative text-center "
    //   style={{ 
    //     backgroundImage: "url(assets/bg/bg_white_patterns.jpg)",
    //     backgroundSize: "cover"
    //   }}
    //   >
    //   <div className="absolute inset-0"></div> {/* Optional: Dark Overlay */}
    //   <div className="relative z-10 py-20 px-56">
    //     <TypographyComponent className="font-sans" variant="display-h1" text="Little Millenium" fontWeight="bold" />
    //     <p className="text-xl font-sans text-black mb-12 font-light">
    //       First of its kind, a school that nurtures your child's future.
    //     </p>
    //   </div>
    // </section>
  );
}
