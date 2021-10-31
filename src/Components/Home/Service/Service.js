import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Service = ({ data }) => {
    // console.log(data)
    const { name, img, describe, price, _id } = data
    return (
        <div>

            {<Card style={{ width: '20rem', minHeight: "650px" }} className="ms-5 mt-3 animate__animated animate__bounceInUp cardss">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {describe}

                    </Card.Text>
                    <div className="d-flex">
                        <h5>price: ${price} / One Person</h5>
                        <Link style={{ textDecoration: "none" }} to={`/orderbooking/${_id}`}><Button variant="outlined">Book Now</Button></Link>
                    </div>
                </Card.Body>
            </Card>}
        </div>
    );
};

export default Service;