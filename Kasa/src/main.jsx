import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./index.css";
import NotFound from "./pages/NotFound/NotFound.jsx";
import About from "./pages/About/About.jsx";
//Création des route et placement des header et du footer
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
