import { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/polls';

const Poll = ({ id, authUser, users, questions, dispatch }) => {
  
  const poll = questions[id];

  const author = users[poll.author];
  const authorName = author?.name;
  const authUserAnswer = users[authUser?.id]?.answers[id];

  const [answer, setAnswer] = useState(authUserAnswer);

  const initialVoteCount = {
    optionOne: poll.optionOne.votes.length,
    optionTwo: poll.optionTwo.votes.length,
  };

  const [voteCount, setVoteCount] = useState(initialVoteCount);
  

  const totalVotes = voteCount.optionOne + voteCount.optionTwo;

  const handleVote = (choice) => {
    if (answer) return;

    dispatch(handleAddAnswer(id, choice));
    setAnswer(choice);

    setVoteCount((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Poll by {authorName}
      </h1>

      {author?.avatarURL ? (
        <img
          src={author.avatarURL}
          alt="avatar"
          className="rounded-full w-24 h-24 mx-auto shadow-md"
        />
      ) : (
        <div className="rounded-full w-24 h-24 mx-auto bg-blue-500 text-white grid place-content-center text-3xl font-bold shadow-md">
          {authorName[0]}
        </div>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Would you rather...
        </h2>

        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => handleVote('optionOne')}
            className={`flex-1 p-5 rounded-xl border shadow-sm transition text-lg font-medium hover:shadow-md ${
              answer === 'optionOne'
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700'
            }`}
          >
            <span>{poll.optionOne.text}</span>

            {authUserAnswer && (
              <div className="mt-3 text-sm opacity-90">
                Votes: {voteCount.optionOne} (
                {((voteCount.optionOne / totalVotes) * 100).toFixed(2)}%)
              </div>
            )}
          </button>

          <button
            onClick={() => handleVote('optionTwo')}
            className={`flex-1 p-5 rounded-xl border shadow-sm transition text-lg font-medium hover:shadow-md ${
              answer === 'optionTwo'
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700'
            }`}
          >
            <span>{poll.optionTwo.text}</span>

            {authUserAnswer && (
              <div className="mt-3 text-sm opacity-90">
                Votes: {voteCount.optionTwo} (
                {((voteCount.optionTwo / totalVotes) * 100).toFixed(2)}%)
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, users, questions }) => ({
  authUser,
  users,
  questions,
});

export default connect(mapStateToProps)(Poll);
