import { Link } from 'react-router-dom';

const PollCard = ({ poll, author }) => {
  const date = new Date(poll.timestamp).toLocaleDateString();

  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      
      <div className="bg-blue-600 p-4 text-white text-center">
        <h3 className="text-lg font-semibold">{author?.name}</h3>
        <p className="text-sm opacity-90">Asked on {date}</p>
      </div>

      <div className="flex flex-col items-center p-6">
        <img
          src={author?.avatarURL || "https://via.placeholder.com/120"}
          alt="avatar"
          className="w-24 h-24 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 object-cover"
        />

        <Link
          to={`/questions/${poll.id}`}
          className="mt-6 w-full text-center py-2 rounded-lg 
                     bg-blue-600 hover:bg-blue-700 
                     text-white font-medium 
                     shadow-sm transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PollCard;
