import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // নিশ্চিত করুন পাথ ঠিক আছে

import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* হেডারকে Routes এর বাইরে রাখলে এটি সব পেজে শো করবে */}
      <Header /> 

      {/* মাঝখানের কন্টেন্টগুলো পেজ অনুযায়ী পরিবর্তন হবে */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </main>

      {/* ফুটারকেও বাইরে রাখুন যেন সব পেজে দেখা যায় */}
     
    </Router>
  );
}

export default App;