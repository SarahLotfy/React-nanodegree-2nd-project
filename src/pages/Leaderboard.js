import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.values(users).sort(
    (a, b) =>
      (Object.keys(b.answers).length + Object.keys(b.questions).length) -
      (Object.keys(a.answers).length + Object.keys(a.questions).length)
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Leaderboard
      </h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3 w-12">#</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3 text-center">Answers</th>
              <th className="px-6 py-3 text-center">Polls</th>
            </tr>
          </thead>

          <tbody>
            {sortedUsers.map((user, index) => (
              <tr
                key={user.id}
                className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4 font-semibold">{index + 1}</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  {user.avatarURL ? (
                    <img
                      src={user.avatarURL}
                      alt={user.name}
                      className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}

                  <span className="font-medium text-gray-900 dark:text-white">
                    {user.name} <span className="text-gray-500">({user.id})</span>
                  </span>
                </td>

                <td className="px-6 py-4 text-center font-semibold">
                  {Object.keys(user.answers).length}
                </td>

                <td className="px-6 py-4 text-center font-semibold">
                  {Object.keys(user.questions).length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);
