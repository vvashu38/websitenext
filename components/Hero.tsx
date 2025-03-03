import Link from "next/link";
import CarouselComponent from "./carousel/CarouselComponent";
import TypographyComponent from "./Preline/Typography";

const images = [
  { src: "/assets/bg/paper_bg.jpg", alt: "First Slide", title: "Slide 1", caption: "This is the first slide." },
  { src: "/assets/bg/bg_white_patterns.jpg", alt: "Second Slide", title: "Slide 2", caption: "This is the second slide." },
  { src: "/assets/bg/paper_bg.jpg", alt: "Third Slide", title: "Slide 3", caption: "This is the third slide." },
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
