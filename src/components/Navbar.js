import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleLogoutAuthedUser } from '../actions/authedUser';

const Navbar = ({ dispatch, authUser }) => {
  const handleLogout = () => {
    dispatch(handleLogoutAuthedUser());
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-30">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Poll App
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-6 rtl:space-x-reverse font-medium text-gray-900 dark:text-white">
          <li>
            <Link
              to="/"
              data-testid="home-link"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              data-testid="new-poll-link"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              New Poll
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              data-testid="leaderboard-link"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Leaderboard
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {authUser ? (
            <>
              <span className="text-gray-900 dark:text-white font-medium">
                {authUser.name}
              </span>
              <button
                onClick={handleLogout}
                data-testid="logout-link"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              data-testid="login-link"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProps)(Navbar);
