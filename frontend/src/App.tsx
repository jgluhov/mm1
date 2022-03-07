import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import './App.scss';
import SignInPage from './pages/SignIn/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import RequireAuth from '@components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage /> } />
      <Route path="/sign-up" element={<SignUpPage /> } />
      <Route path="/dashboard" element={
        <RequireAuth>
          <DashboardPage />
        </RequireAuth> }
      />
    </Routes>
  );
}

export default App;
