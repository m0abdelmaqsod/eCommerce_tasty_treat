import React from 'react';
import { FaCarRear } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>

                        <Col>
                            <div className="header_info  mt-5">
                                <h3>Easy Way to make an order</h3>

                                <h1 className='w-75'><span>HUNGRY?</span> just wait food at <span>your door</span></h1>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo exercitati onem, minima eveniet expedita dolor.</p>

                                <div className="btn_header">
                                    <Link className='me-4' to='/'>
                                        <Button variant="danger">Order Now</Button>
                                    </Link>
                                    <Link to='/'>
                                        <Button className='px-4' variant="outline-danger">See all foods</Button>
                                    </Link>
                                </div>


                                <div className=" d-flex mt-5">
                                    <h5 className="me-5">
                                        <span><FaCarRear /> </span>
                                        No Shipping Fees
                                    </h5>

                                    <h5>
                                        <span><AiOutlineSafety /> </span>
                                        100% Secure Checkout
                                    </h5>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="img_header">
                                <img className='w-100' src={require('../../../assets/images/hero.png')} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Header