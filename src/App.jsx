import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import References from './pages/References/References';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact'; // Contact পেজ ইমপোর্ট

function App() {
  return (
    <Router>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} /> {/* Contact রুট */}
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;