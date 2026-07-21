import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ১. ইমপোর্ট
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import References from './pages/References/References';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';
import EasyLanguage from './pages/Language/EasyLanguage';
import Signlanguage from './pages/Language/Signlanguage';
import Accessibilitystatement from './pages/Language/Accessibilitystatement';

function App() {
  return (
    <HelmetProvider> {/* ২. অ্যাপটিকে র‍্যাপ করুন */}
      <Router>
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Leistungen" element={<Services />} />
            <Route path="/Referenzen" element={<References />} />
            <Route path="/Karriere" element={<Career />} />
            <Route path="/Kontakt" element={<Contact />} />
            <Route path="/leichte-sprache" element={<EasyLanguage />} />
            <Route path="/sign-language" element={<Signlanguage />} />
            <Route path="/accessibility-statement" element={<Accessibilitystatement />} />
          </Routes>
        </main>
        <Footer /> 
      </Router>
    </HelmetProvider>
  );
}

export default App;