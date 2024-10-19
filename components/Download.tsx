import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download: React.FC = () => (
  <section className="container mx-auto py-24 px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 order-2 md:order-1 p-4 justify-start">
        <Image
          src="/products/phone1.png"
          alt="Financial app interface"
          width={500}
          height={500}
          className="w-1/2 h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-end">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Download Our App
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-6">
            Get financial control at your fingertips. Track expenses, set budgets, and view your financial health
            anytime, anywhere. Download now for a smarter way to manage your money.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="download-button bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md text-base flex items-center space-x-2 transition-colors duration-200"
            >
              <FaApple className="text-2xl" />
              <span>App Store</span>
            </Link>
            <Link
              href="#"
              className="download-button bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md text-base flex items-center space-x-2 transition-colors duration-200"
            >
              <FaGooglePlay className="text-2xl" />
              <span>Google Play</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
