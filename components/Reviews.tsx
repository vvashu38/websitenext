import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Best finance budgeting app ever!",
    content:
      "This finance app has been a game-changer for me! It's made budgeting and tracking my expenses so much easier. I love how intuitive and user-friendly it is.",
    author: "Jonas Aly",
    designation: "Founder @ Company",
  },
  {
    rating: 5,
    title: "Super helpful to watch my spend",
    content:
      "I can't thank this app enough for helping me stay on top of my bills. The bill payment reminders have saved me from late fees, & more organized with my finances.",
    author: "Mark Bures",
    designation: "Businessman",
  },
  {
    rating: 5,
    title: "Great app that saves money",
    content:
      "The app's integration with my bank accounts is seamless. I can easily check my balances and transactions without having to log in separately.",
    author: "William Kolas",
    designation: "Student",
  },
  {
    rating: 3,
    title: "Seriously life changing app!",
    content:
      "The financial insights and reports have been eye-opening. I now have a better understanding of my spending habit and can make adjustment to save more.",
    author: "Andrew Chan",
    designation: "Manager @ AB Company",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          We've earned a 4.8-star Trustpilot rating
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
