import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>VNRVJIET</h2>
              <p style={{ color: '#cbd5e1' }}>Empowering Tomorrow's Leaders</p>
            </div>
            <div className="footer-links">
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>&copy;  24071A05F0</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
