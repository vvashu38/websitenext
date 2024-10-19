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
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                Easily monitor all financial activities
              </h2>
              <p className="text-xl">
                Users can input their income & expenses, categorize transactions, and view reports and summaries of
                their spending habits. It enables effective budgeting and expense tracking, helping you stay on top of
                your financial goals.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                Easily monitor all financial activities
              </h2>
              <p className="text-xl">
                Users can input their income & expenses, categorize transactions, and view reports and summaries of
                their spending habits. It enables effective budgeting and expense tracking, helping you stay on top of
                your financial goals.
              </p>
            </div>
          }
        />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
