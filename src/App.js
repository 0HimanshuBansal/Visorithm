import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mx-3 mt-3">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="contactUs/*" element={<Contact />} />
            <Route path="about/*" element={<About />} />
            <Route path="help/*" element={<Help />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
