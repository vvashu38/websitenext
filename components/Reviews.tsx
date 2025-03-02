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
    title: "Amazing Preschool!",
    content:
      "This preschool has been wonderful for my child. The teachers are caring and the curriculum is engaging. My child looks forward to going to school every day.",
    author: "Sarah Johnson",
    designation: "Mother of a 3-year-old",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    content:
      "I am so happy with the progress my child has made since joining this preschool. The staff is attentive and the environment is nurturing. Highly recommend!",
    author: "Michael Smith",
    designation: "Father of a 4-year-old",
  },
  {
    rating: 4,
    title: "Great Learning Environment",
    content:
      "The preschool provides a great learning environment. My child has learned so much and made many friends. The teachers are fantastic!",
    author: "Emily Davis",
    designation: "Mother of a 5-year-old",
  },
  {
    rating: 5,
    title: "Wonderful Experience",
    content:
      "We have had a wonderful experience with this preschool. The staff is friendly and the activities are well-planned. My child loves it here!",
    author: "John Lee",
    designation: "Father of a 3-year-old",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-white">
          Proud Parents Speak
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
