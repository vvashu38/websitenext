import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import TypographyComponent from "components/Preline/Typography";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
          <Hero />
        <Section
          leftHalf={
            <>
              <TypographyComponent variant="display-h1" text="Little Millenium" fontWeight="bold" className="mb-4 font-appleberry" />
              <TypographyComponent variant="text-xl" text="Our app makes it easy to showcase your key features. With customizable sections, you can highlight the most important aspects of your product. More to come." className="font-light" />
            </>
          }
          rightHalf={
            <Image src={"/assets/images/kids_with_earth.jpg"} alt="section-image" width={500} height={100} className="w-96 h-auto" />
          }
        />
        <Features />
        {/* <Customers /> */}
        {/* <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <TypographyComponent variant="display-lg" text="Highlight the key features" fontWeight="bold" className="mb-4" />
              <TypographyComponent variant="text-xl" text="Talk about some of the key features of your app that you want to highlight. Use the beautiful accordion to highlight the key features of your app." className="font-light" />
            </div>
          }
        /> */}
        <Reviews />
        {/* <Download /> */}
      </main>
      <Footer />
    </div>
  );
}