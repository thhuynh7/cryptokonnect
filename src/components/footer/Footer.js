import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-300">
        <div className="container">
          <div className="social">
            <span className="text-4xl">
              <a className="text-black no-underline hover:no-underline" href="/about">
                Crypto Konnect
              </a>
            </span>
            <div className="icon">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/thhuynh7/cryptokonnect">
                <i className="fab fa-github"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/thai-gta">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="link">
            <ul className="col">
              <li>Crypto Konnect</li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
            <ul className="col">
              <li>Quick Links</li>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <ul className="col">
              <li>Legal</li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/license">User Agreement</a>
              </li>
              <li></li>
            </ul>
            <p><strong>Copyright 2022 </strong><Link className='no-underline hover:no-underline' to="/about"><strong>Crypto Konnect</strong></Link></p>
          </div>
        </div>
      </footer>
    );
  }
}
