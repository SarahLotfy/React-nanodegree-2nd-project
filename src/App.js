import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { receiveInitialData } from './actions/initialData';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import NewPoll from './pages/NewPoll';
import Poll from './pages/Poll';

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  return (
    <div className="pt-16">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/leaderboard"
          element={loggedIn ? <Leaderboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/add"
          element={loggedIn ? <NewPoll /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/questions/:id"
          element={loggedIn ? <Poll /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to={loggedIn ? "/" : "/login"} replace />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(App);
