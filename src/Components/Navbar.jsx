import React from 'react';
import '../Styles/Navbar.css';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import logo from '../Assets/ohmeds-logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { TfiWallet } from "react-icons/tfi";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar fixed p-3">
      <div className="navbar-top d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="location ms-3">Medskwik</span>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/payment" className="navbar-icon-link m-1">
            <TfiWallet className="navbar-icon" />
          </Link>
          <PiShoppingCartSimple className="navbar-icon cart-icon m-1" />
        </div>
      </div>
      <div className="navbar-bottom d-flex justify-content-center mt-3">
        <InputGroup className="search-bar">
          <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
          <Form.Control
            placeholder="Search for medicine"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </header>
  );
};

export default Navbar;
