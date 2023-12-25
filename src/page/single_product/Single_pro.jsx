import React, { useState, useEffect } from 'react';
import './style/single_pro.css';
import Single_pro_data from '../../components/singilePro/single_pro_data/Single_pro_data';
import You_might_also_like from '../../components/singilePro/you_might_also_like/You_might_also_like';
import Info_data_single_pro from '../../components/singilePro/info_data_single_pro/Info_data_single_pro';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Single_pro = () => {
    const [data, setData] = useState([]);
    document.title = `${data.namePro}`;

    const { id } = useParams();

    useEffect(() => {
        const fetchDataPro = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/allProduct/${id}`);
                setData(response.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchDataPro();
    }, [id]);


    return (
        <>
            <section className="single_pro">
                <Single_pro_data data={data} />
                <Info_data_single_pro dataPro={data} />
                <You_might_also_like categoryPro={data} />
            </section>
        </>
    )
}

export default Single_pro