import React from 'react';
import useData from '../../../Hooks/useData';
import Service from '../Service/Service';
import "./services.css"

const Services = () => {
    const data = useData()
    console.log(data)
    return (
        <div className="App">
            <h2>Our Offerings</h2>
            <div className="service">
                {
                    data.length > 0 && data.slice(1,).map(data => <Service key={data._id} data={data} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;