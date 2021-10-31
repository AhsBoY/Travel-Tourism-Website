import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Utilities from './Utilities/Utilities';

const Home = () => {
    return (
        <div className="App">
            <Banner />
            <Services />
            <About />
            <Utilities />
        </div>
    );
};

export default Home;