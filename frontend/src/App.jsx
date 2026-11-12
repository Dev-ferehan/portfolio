import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './markup/pages/Home'
import ProjectDetail from './markup/pages/ProjectDetail';
import AOS from 'aos'; // <-- Added missing AOS import
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-details" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;