import React from 'react';
import './styles/home.css';
import Header from '../../components/home/header/Header';
import Filter_popular_foods from '../../components/home/filter_popular_foods/Fil_popular_foods'
import Why_tasty_treat from '../../components/home/why_tasty_treat/Why_tasty_treat';
import Hot_pizza from '../../components/home/hot_pizza/Hot_pizza'
import Our_services from '../../components/home/our_services/Our_services'
import Testimonials_com from '../../components/home/testimonials_com/Testimonials_com';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <section className='home'>
        <Header />
        <Our_services />
        <Filter_popular_foods />
        <Why_tasty_treat />
        <Hot_pizza />
        <Testimonials_com />
      </section>

    </>
  )
}

export default Home;