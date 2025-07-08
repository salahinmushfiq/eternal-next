import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
const calculateAverageRating = (reviews: Review[]) => {
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return (total / reviews.length).toFixed(1);
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={18}
        className="text-[#b59f90]"
        fill={i <= rating ? '#b59f90' : 'none'}
        stroke={i <= rating ? '#b59f90' : '#d6ccc2'}
      />
    );
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  const avg = parseFloat(calculateAverageRating(reviews));

  return (
    <section className="mt-20">
      {/* Summary */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#7f6d5f] mb-2">Customer Reviews</h2>
        <div className="flex justify-center items-center gap-3 mb-1">
          {renderStars(Math.round(avg))}
          <span className="text-gray-[#99897f] font-semibold text-lg">{avg}/5</span>
        </div>
        <p className="text-sm text-[#99897f]">{reviews.length} verified review{reviews.length !== 1 && 's'}</p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white border border-[#e9e4e0] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {renderStars(review.rating)}

            <p className="text-sm text-[#3d3a36] mb-4 italic leading-relaxed">
              “{review.comment}”
            </p>

            <div className="text-xs text-[#99897f] flex justify-between">
              <span>— {review.user}</span>
              <span>{new Date(review.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
