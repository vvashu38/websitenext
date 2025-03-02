import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Little Millenium!
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        First of its kind, a school that nurtures your child's future.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/get-started"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-md text-base font-semibold hover:from-green-500 hover:to-blue-600 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-md text-base font-semibold hover:from-yellow-500 hover:to-orange-600 transition duration-300"
        >
          Download
        </Link>
      </div>
    </section>
  );
}
