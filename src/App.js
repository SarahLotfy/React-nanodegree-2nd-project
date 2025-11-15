import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { receiveInitialData } from './actions/initialData';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import NewPoll from './pages/NewPoll';
import PollWrapper from './pages/PollWrapper';
import Error from './pages/Error';
import PrivateWrapper from './components/PrivateWrapper';

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  return (
    <div className="pt-16">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateWrapper />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/questions/:id" element={<PollWrapper />} />
          </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(App);
