import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/polls';

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    firstOption: '',
    secondOption: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!options.firstOption || !options.secondOption) {
      alert('Please enter both options');
      return;
    }
    dispatch(handleAddQuestion(options.firstOption, options.secondOption));
    navigate('/');
  };

  return (
    <div className="flex justify-center mt-14 px-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Create a New Poll
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div>
            <label
              htmlFor="firstOption"
              data-testid="firstOptionLabel"
              className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-300"
            >
              First Option
            </label>
            <input
              value={options.firstOption}
              onChange={(e) =>
                setOptions({ ...options, firstOption: e.target.value })
              }
              type="text"
              id="firstOption"
              data-testid="firstOption"
              className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter your first option..."
            />
          </div>

          <div>
            <label
              htmlFor="secondOption"
              data-testid="secondOptionLabel"
              className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-300"
            >
              Second Option
            </label>
            <input
              value={options.secondOption}
              onChange={(e) =>
                setOptions({ ...options, secondOption: e.target.value })
              }
              type="text"
              id="secondOption"
              data-testid="secondOption"
              className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter your second option..."
            />
          </div>

          <button
            type="submit"
            data-testid="submit-poll"
            className="w-full py-3 rounded-xl text-white font-semibold text-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition shadow"
          >
            Add Poll
          </button>
        </form>

      </div>
    </div>
  );
};

export default connect()(NewPoll);
