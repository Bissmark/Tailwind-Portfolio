import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="h-screen bg-zinc-800 text-white font-cagliostro">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;