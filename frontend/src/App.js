import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Store from "./components/pages/Store";
import NewsEvents from "./components/pages/NewsEvents";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className= "App">
    <Header/>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/newsnevents" element={<NewsEvents/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;






