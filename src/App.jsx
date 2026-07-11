import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home'; // সঠিক পাথ
=======
import Header from './components/Header'; // নিশ্চিত করুন পাথ ঠিক আছে

import Home from './pages/Home';
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer /> 
=======
      {/* হেডারকে Routes এর বাইরে রাখলে এটি সব পেজে শো করবে */}
      <Header /> 

      {/* মাঝখানের কন্টেন্টগুলো পেজ অনুযায়ী পরিবর্তন হবে */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </main>

      {/* ফুটারকেও বাইরে রাখুন যেন সব পেজে দেখা যায় */}
     
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1
    </Router>
  );
}

export default App;