import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import './App.scss';
import SignInPage from './pages/SignIn/SignInPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage /> } />
    </Routes>
  );
}

export default App;
