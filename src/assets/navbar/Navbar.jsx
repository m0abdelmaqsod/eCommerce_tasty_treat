import React from 'react';
import './styles/navbar.css'
import { FaRegUser, FaBasketShopping } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className='navbar py-2'>
                <Container>

                    <div className="logo_nav">
                        <Link to='/'>
                            <img className='d-flex  m-auto mb-1' src={require('../images/res-logo.png')} alt="" />
                            <h3>Testy Treat</h3>
                        </Link>
                    </div>




                    <div className="link_nav">
                        <ul className='d-flex'>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} to='/'>Home</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} to='/Foods'>Foods</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} to='/Cart'>Cart</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} to='/Contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>




                    <div className="div_icons_navbar d-flex ">
                        <div className="icon_cart">
                            <button>
                                <FaBasketShopping />
                                <span className='d-flex rounded-5 text-light'>2</span>
                            </button>
                        </div>

                        <div className="icon_user">
                            <button>
                                <FaRegUser />
                            </button>
                        </div>
                    </div>
                </Container >
            </nav>
        </>
    )
}

export default Navbar