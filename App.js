import React from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Packages from "./Components/Packages.js";
import Contact from "./Components/Contact.js";
import Blog from "./Components/Blog.js";
import Footer from "./Components/Footer.js";
import Book from "./Components/Book.js";

import './Components/Packages.css';
import './Components/Home.css';
import './Components/Header.css';
import './Components/Footer.css';
import './Components/Contact.css';
import './Components/Blog.css';
import './Components/Book.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Book />
      <Packages />
      <Blog />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
