import React from 'react';
import Home from './home';
import Contact from './contact'
import Shop from './shop'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from "./photos/logo.png"

function App() {
  return (
    <>
      <Router>
        <header>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </Router>





     <footer>
            <div className="info_form">
                <h4>Newsletter</h4>
                <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button id = "newsletterBtn">Subscribe</button>
                </form>
            </div>

            <div className="social_media">
                <h4>Connect with Us</h4>
                <ul>
                    <li><a href="https://facebook.com/plantsprouts" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/plantsprouts" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com/plantsprouts" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    {/* Add more social media links as needed */}
                </ul>
            </div>

            <div className="additional_options">
                <h4>Additional Options</h4>
                <ul>
                    <li><a href="lin.com">FAQs</a></li>
                    <li><a href="lin.com">Terms of Service</a></li>
                    <li><a href="lin.com">Privacy Policy</a></li>
                    {/* Add more options as needed */}
                </ul>
            </div>

            <div className="contact_info">
                <h4>Contact</h4>
                <ul>
                    <li>1-888-Grow-Now</li>
                    <li>Contact@PlantSprouts.org</li>
                </ul>
            </div>

            <div className="visit_info">
                <h4>Visit</h4>
                <ul>
                    <li>224 Sprouty Street</li>
                    <li>Charlotte, NC 28212</li>
                </ul>
            </div>
        </footer>
    </>
  );
}



export default App;



