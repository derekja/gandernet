import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Members from './pages/Members';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
