import React, { useState, useEffect } from 'react';
import './styles/home.css';
import Header from '../../components/home/header/Header';
import Filter_popular_foods from '../../components/home/filter_popular_foods/Fil_popular_foods'
import Why_tasty_treat from '../../components/home/why_tasty_treat/Why_tasty_treat';
import Hot_pizza from '../../components/home/hot_pizza/Hot_pizza'
import Our_services from '../../components/home/our_services/Our_services'
import Testimonials_com from '../../components/home/testimonials_com/Testimonials_com';
import axios from 'axios';


const Home = () => {
  document.title = 'Home';
  // === set all data === //
  const [data, setData] = useState([]);

  // === start get data === //
  useEffect(() => {
    axios.get("http://localhost:8000/allProduct")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error))
  }, []);


  // === handel filter Data Hot Pizza === //
  const handelDataHotPizza = data.filter((product) => product.category === "pizza");
  // === handel slice length filter Data Hot Pizza === //
  const handelHotPizza = handelDataHotPizza.slice(0, 4);


  return (
    <>
      <section className='home'>
        <Header />
        <Our_services />
        <Filter_popular_foods data={data} />
        <Why_tasty_treat />
        <Hot_pizza handelHotPizza={handelHotPizza} />
        <Testimonials_com />
      </section>

    </>
  )
}

export default Home;