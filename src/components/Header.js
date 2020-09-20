import React from "react";
import "../style.css";
import { MdNotificationsActive } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <div className="header flex">
      <nav className="nav-left">
        <ul>
          <div className="logo">
            <h3>P</h3>
          </div>
          <input type="text" className="search-bar" placeholder="Discover your next favorite thing..." />
          <li>Deals</li>
          <li>Jobs</li>
          <li>Discussions</li>
          <li>Ship</li>
          <li>Mentors</li>
          <li>deals</li>
          <li>...</li>
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
          <li>Post</li>
          <li>
            <MdNotificationsActive/>
          </li>
          <li>
            <FaUserCircle/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
