import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../assets/navbar/Navbar';
import Home from './home/Home';
import Single_pro from './single_product/Single_pro';
import Cart from './cart/Cart';
import Foods from './foods/Foods';
import Contact from './contact/Contact'
import NotFound from './notFound/NotFound';
import Footer from '../assets/footer/Footer';

const Home_Router = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Single_pro/:id' element={<Single_pro />} />
                    <Route path='/Foods' element={<Foods />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Home_Router