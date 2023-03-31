import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import TopBanner from './banner';
import MovieList from './movies';
import PodcastPage from './podcasts';
import HomePage from './home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBanner />
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/podcasts">Podcasts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/podcasts" element={<PodcastPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
