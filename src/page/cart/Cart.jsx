import React, { useState } from 'react';
import './styles/cart.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';





const Cart = () => {
    const [data, setData] = useState([])




    return (
        // ====== start of cart ======= //
        <search className='cart'>

            {/* ====== start of banner ======= */}
            <div className="banner">
                <img src={require("../../assets/images/banner-2.jpg")} alt="" />
                <h3><span>Your Cart</span></h3>
            </div>





            {/* ====== start of div cart ======= */}
            <div className="div_cart">
                <Container>
                    {
                        data === ''?
                            <p className='no_pro'>There are no products in the cart</p>
                            : <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <img src={require('../../assets/images/product_01.3.jpg')} alt="" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <p>Chicken Burger</p>
                                            </Link>
                                        </td>
                                        <td>$24</td>
                                        <td>1x</td>
                                        <td>
                                            <button><RiDeleteBinLine /></button>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <img src={require('../../assets/images/product_3.2.jpg')} alt="" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <p>Chicken Burger</p>
                                            </Link>
                                        </td>
                                        <td>$24</td>
                                        <td>1x</td>
                                        <td>
                                            <button><RiDeleteBinLine /></button>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <img src={require('../../assets/images/product_09.jpg')} alt="" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/Single_pro/`}>
                                                <p>Chicken Burger</p>
                                            </Link>
                                        </td>
                                        <td>$24</td>
                                        <td>1x</td>
                                        <td>
                                            <button><RiDeleteBinLine /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    }









                    {/* ====== start of div total price ======= */}
                    <div className="total_price">
                        <h5>Subtotal : $<span>150</span></h5>
                        <p>Taxes and shipping will calculate at checkout</p>
                        <div className="btn_shop_and_checkout">
                            <Link to='/Foods'>
                                <Button variant="danger">Continue Shopping</Button>
                            </Link>
                            <Link to='/Checkout'>
                                <Button variant="danger">Proceed to checkout</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

        </search>
    )
}

export default Cart