import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import TopBanner from './banner';
import MovieList from './movies';
import PodcastPage from './podcasts';
import HomePage from './home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <TopBanner />
          <div className="container">
            <a className="navbar-brand" href="/">
              Hiltons Movies
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/movies">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/podcasts">
                    Podcasts
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
