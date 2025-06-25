// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Home from './pages/Home';
import GetInvolved from './pages/GetInvolved';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Social Cause Platform</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/get-involved" className="hover:underline">Get Involved</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </header>

        {menuOpen && (
          <nav className="md:hidden bg-blue-500 text-white p-4 space-y-2">
            <Link to="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/get-involved" className="block hover:underline" onClick={() => setMenuOpen(false)}>Get Involved</Link>
          </nav>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;