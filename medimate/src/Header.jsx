import React from 'react';
import { Helmet } from 'react-helmet';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <Helmet>
        {/* Include the external resources */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" />
      </Helmet>

      <p className="Logo">Medimate Web-based Solution</p>
      <input type="checkbox" className="btn" id="check" />
      <label htmlFor="check" className="menu2">
        <i className='bx bx-menu' id="menu-icon"></i>
        <i className='bx bx-x' id="close-icon"></i>
      </label>

      <div className="nav">
        <ol>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="Reservation.html">News</a></li>
          <li><a href="order.html">Programmes</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a className="scroll-link" href="#about">About</a></li>
        </ol>
      </div>

    </header>
  );
}

export default Header;
