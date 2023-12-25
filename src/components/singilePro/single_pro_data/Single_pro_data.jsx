import React, { useState } from 'react';
import './styles/single_pro_data.css'
import { Container, Col, Row, Button } from 'react-bootstrap';



const Single_pro_data = (data) => {
    const dataPro = data.data;

    const [handelImg, setHandelImg] = useState("");


    return (
        <>
            <div className="single_data">

                <div className="banner">
                    <img src={require("../../../assets/images/banner.jpg")} alt="" />
                    <h3><span>{dataPro.namePro}</span></h3>
                </div>

                <Container>
                    <div className="data_pro">
                        <Row className='row_pro'>
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="slider_pro">
                                    <Row>
                                        <Col sm="12" md="12" lg="3" xl="3">
                                            <div className="img_sidebar_slider">
                                                <img onClick={() => setHandelImg(dataPro.imgUrl)} src={dataPro.imgUrl} alt="" />

                                                <img className={dataPro.imgUr2 === "" ? "img_none" : ""} onClick={() => setHandelImg(dataPro.imgUrl2)} src={dataPro.imgUrl2} alt="" />

                                                <img className={dataPro.imgUrl3 === "" ? "img_none" : ""} onClick={() => setHandelImg(dataPro.imgUrl3)} src={dataPro.imgUrl3} alt="" />
                                            </div>
                                        </Col>


                                        <Col sm="12" md="12" lg="9" xl="9">
                                            <div className="img_slider">
                                                <img src={handelImg === "" ? dataPro.imgUrl : handelImg} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>


                            <Col sm="12" md="5" lg="5" xl="5">
                                <div className="data_slider">
                                    <h3>{dataPro.namePro}</h3>
                                    <h5>Price: <span>${dataPro.price}</span></h5>
                                    <p>Category: <span>{dataPro.category}</span></p>
                                    <Button variant="danger">Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Single_pro_data;