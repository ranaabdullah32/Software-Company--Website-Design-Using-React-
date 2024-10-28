import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import NavBar from './Components/Navbar/NavBar'; 
import Footer from './Components/Footer/footer';
// Lazy load components
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Contact = lazy(() => import('./Components/Contact/Contact'));


const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
      <NavBar/> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <Footer/>
      </Suspense>
  );
};

export default App;
