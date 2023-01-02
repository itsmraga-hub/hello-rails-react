import React from 'react';
import Greeting from './Greeting';
import { Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/greeting" element={<Greeting/>}/>
    </Routes>
    <h1>Welcome to main page</h1>
    <Link to="/greeting">Click to generate random message</Link>
  </>);
}

export default App;
