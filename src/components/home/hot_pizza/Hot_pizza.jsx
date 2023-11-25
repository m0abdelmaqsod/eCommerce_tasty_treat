import React from 'react';
import './styles/hot_pizza.css';
import { Container, Row, Col, Button } from 'react-bootstrap';



const Hot_pizza = () => {
    return (
        <>
            <div className="hot_pizza">
                <Container>
                    <h3>Hot Pizza</h3>
                    <div className="pro_hot_pizza mt-4">
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

export default Hot_pizza;