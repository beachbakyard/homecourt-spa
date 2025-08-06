import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Juniors from './pages/Juniors';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Shop from './pages/Shop';
import Rules from './pages/Rules';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/juniors" element={<Juniors />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
