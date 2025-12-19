import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedCTA from './components/FixedCTA';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Registration from './pages/Registration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
        <FixedCTA />
      </div>
    </Router>
  );
}

export default App;
