import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/sidebarCart.css';
import { Link } from 'react-router-dom';



const SidebarCart = ({ openSidebarCart, setOpenSidebarCart }) => {


    return (
        <>
            <section className={openSidebarCart === false ? 'sidebarClose div_sidebar' : 'div_sidebar'}>
                <div className="sidebarCart">

                    <Container>

                        <Button onClick={() => setOpenSidebarCart(false)} className='btn_close my-4 ms-2 rounded-5 p-0 d-flex ' variant="dark">X</Button>
                        <div className="allCart ">

                            <div className="singleProCart d-flex mb-3">
                                <div className="div_img">
                                    {/* <Link to={`/Single_pro/${product.id}`}></Link> */}
                                    <img src={require('../images/product_01.1.jpg')} alt="" />
                                </div>
                                <div className="infoSingleProCart w-100">
                                    {/* <Link to={`/Single_pro/${product.id}`}></Link> */}
                                    <h3>Chicken Burger</h3>

                                    <div className="quantity_price d-flex">
                                        <p>1x</p>
                                        <h5>$24</h5>
                                    </div>

                                    <div className="btn_inc_and_dec d-flex">
                                        <button>+</button>
                                        <p className='m-0'>1</p>
                                        <button>-</button>
                                    </div>
                                </div>
                                <div className="btn_delete d-flex">
                                    <button className='delete '>X</button>
                                </div>
                            </div>


                            <div className="singleProCart d-flex mb-3">
                                <div className="div_img">
                                    <img src={require('../images/product_01.1.jpg')} alt="" />
                                </div>
                                <div className="infoSingleProCart w-100">
                                    <h3>Chicken Burger</h3>

                                    <div className="quantity_price d-flex">
                                        <p>1x</p>
                                        <h5>$24</h5>
                                    </div>

                                    <div className="btn_inc_and_dec d-flex">
                                        <button>+</button>
                                        <p className='m-0'>1</p>
                                        <button>-</button>
                                    </div>
                                </div>
                                <div className="btn_delete d-flex">
                                    <button className='delete '>X</button>
                                </div>
                            </div>

                            <div className="singleProCart d-flex mb-3">
                                <div className="div_img">
                                    <img src={require('../images/product_01.1.jpg')} alt="" />
                                </div>
                                <div className="infoSingleProCart w-100">
                                    <h3>Chicken Burger</h3>

                                    <div className="quantity_price d-flex">
                                        <p>1x</p>
                                        <h5>$24</h5>
                                    </div>

                                    <div className="btn_inc_and_dec d-flex">
                                        <button>+</button>
                                        <p className='m-0'>1</p>
                                        <button>-</button>
                                    </div>
                                </div>
                                <div className="btn_delete d-flex">
                                    <button className='delete '>X</button>
                                </div>
                            </div>

                            <div className="singleProCart d-flex mb-3">
                                <div className="div_img">
                                    <img src={require('../images/product_01.1.jpg')} alt="" />
                                </div>
                                <div className="infoSingleProCart w-100">
                                    <h3>Chicken Burger</h3>

                                    <div className="quantity_price d-flex">
                                        <p>1x</p>
                                        <h5>$24</h5>
                                    </div>

                                    <div className="btn_inc_and_dec d-flex">
                                        <button>+</button>
                                        <p className='m-0'>1</p>
                                        <button>-</button>
                                    </div>
                                </div>
                                <div className="btn_delete d-flex">
                                    <button className='delete '>X</button>
                                </div>
                            </div>
                        </div>

                    </Container>
                    <div className="totalPrice d-flex ">
                        <p>Subtotal : $1005</p>
                        <Button variant="light">Checkout</Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SidebarCart