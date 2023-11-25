import React from 'react';
import './styles/filter_popular_foods.css';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Fil_popular_foods = () => {
    return (
        <>
            <div className="fil_popular_foods">
                <h3 className='text-center'>Popular Foods</h3>
                <Container>
                    <div className="navbar_filter_popular py-3">
                        <ul className='d-flex m-auto'>
                            <li>
                                <button className='activeNavFilter'>
                                    <span>All</span>
                                </button>
                            </li>

                            <li>
                                <button>
                                    <img src={require('../../../assets/images/hamburger.png')} alt="" />
                                    <span>Burger</span>
                                </button>
                            </li>

                            <li>
                                <button>
                                    <img src={require('../../../assets/images/pizza.png')} alt="" />
                                    <span>Pizza</span>
                                </button>
                            </li>

                            <li>
                                <button>
                                    <img src={require('../../../assets/images/bread.png')} alt="" />
                                    <span>Bread</span>
                                </button>
                            </li>
                        </ul>
                    </div>




                    <div className="all_pro_popular mt-5">
                        <Row>
                            <Col>
                                <div className="pro p-4">
                                    <img src={require('../../../assets/images/product_01.jpg')} alt="" />
                                    <h5>Chicken Burger</h5>

                                    <div className="price_btn d-flex">
                                        <p>$24</p>
                                        <Button variant="danger">Add To Cart</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="pro p-4">
                                    <img src={require('../../../assets/images/product_2.1.jpg')} alt="" />
                                    <h5>Vegetarian Pizza</h5>

                                    <div className="price_btn d-flex">
                                        <p>$24</p>
                                        <Button variant="danger">Add To Cart</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="pro p-4">
                                    <img src={require('../../../assets/images/product_3.1.jpg')} alt="" />
                                    <h5>Double Cheese</h5>

                                    <div className="price_btn d-flex">
                                        <p>$24</p>
                                        <Button variant="danger">Add To Cart</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="pro p-4">
                                    <img src={require('../../../assets/images/product_4.1.jpg')} alt="" />
                                    <h5>Mexican Green Wave</h5>

                                    <div className="price_btn d-flex">
                                        <p>$24</p>
                                        <Button variant="danger">Add To Cart</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Fil_popular_foods