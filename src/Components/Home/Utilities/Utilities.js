import React from 'react';
import useData from '../../../Hooks/useData';
// import useData from '../../../Hooks/useData';
import "./utilities.css"
import Button from '@mui/material/Button';


const Utilities = () => {
    const data = useData()
    const { img3 } = data[0] !== undefined && data[0]

    return (
        <div style={{ backgroundColor: "#faf1ed" }} className="App px-5">
            <div className="d-md-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <h2>Don't Go It Alone</h2>
                        <h2>Hire An Expert To Craft Your Trip</h2>
                        <Button variant="contained">Learn More</Button>
                    </div>
                </div>
                <div className="pe-5 me-5">
                    <img src={img3} width="450px" className="image" height="250px" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Utilities;