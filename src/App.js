import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Homepage from "./component/Homepage/Homepage";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Navbar/sidebar";
import Projects from "./component/Projects/Projects";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./component/Homepage/ScrollTop"


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  Aos.init();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
