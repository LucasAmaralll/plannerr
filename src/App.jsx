// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Form from "./pages/Form";
import UserArea from "./pages/UserArea";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import SobreMim from "./pages/SobreMim";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/form" element={<Form />} />
          <Route path="/user" element={<UserArea />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
