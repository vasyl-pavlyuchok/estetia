import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;