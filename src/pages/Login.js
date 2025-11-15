import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { handleLoginAuthedUser } from '../actions/authedUser';

const Login = ({ dispatch, loggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: 'sarahedo',
    password: 'password123',
  });
  const [error, setError] = useState('');
  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : '/'} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(handleLoginAuthedUser(credentials));
    if (!res) {
      setError('Username or password is incorrect');
    }
  };

  const handleLogin = (username, password) => {
    dispatch(handleLoginAuthedUser({ username, password }));
  };


  return (
    <div className="flex items-center justify-center mt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          Login
        </h2>

        <div className="flex justify-center dropdown">
          <label
            data-testid="existing-user-label"
            tabIndex="0"
            className="btn m-1"
          >
            Existing User
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                handleLogin('sarahedo', 'password123');
              }}
            >
              <span>Sarah Edo</span>
            </li>
            <li
              onClick={() => {
                handleLogin('tylermcginnis', 'abc321');
              }}
            >
              <span>Tyler McGinnis</span>
            </li>
            <li
              onClick={() => {
                handleLogin('mtsamis', 'xyz123');
              }}
            >
              <span>Mike Tsamis</span>
            </li>
            <li
              onClick={() => {
                handleLogin('zoshikanlu', 'pass246');
              }}
            >
              <span>Zenobia Oshikanlu</span>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <label
            htmlFor="username"
            data-testid="username-label"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Username
          </label>
          <input
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            type="text"
            id="username"
            data-testid="username-input"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            data-testid="password-label"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Password
          </label>
          <input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            type="password"
            id="password"
            data-testid="password-input"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && (
          <div className="p-3 mb-4 text-red-700 bg-red-100 rounded-lg" data-testid="error-message">
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          data-testid="submit-login"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>

  );
};

const mapStateToProps = ({ authUser }) => {
  return {
    loggedIn: !!authUser,
  };
};

export default connect(mapStateToProps)(Login);
