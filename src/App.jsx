import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import References from './pages/References/References';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';
import EasyLanguage from './pages/Language/EasyLanguage';
import Signlanguage from './pages/Language/Signlanguage';
import Accessibilitystatement from './pages/Language/Accessibilitystatement'; // ১. ইমপোর্ট করুন

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/leichte-sprache" element={<EasyLanguage />} />
          <Route path="/sign-language" element={<Signlanguage />} />
          <Route path="/accessibility-statement" element={<Accessibilitystatement />} /> {/* ২. রাউট যোগ করুন */}
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;