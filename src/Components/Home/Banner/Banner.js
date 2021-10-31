import React from 'react';
import { Carousel } from 'react-bootstrap';
import useData from '../../../Hooks/useData';

const Banner = () => {
    const data = useData()

    return (
        <div>
            {data.length > 0 && <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={data[0].img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "orange" }} className="fst-italic">TourX</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={data[0].img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={data[0].img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            }
        </div>
    );
};

export default Banner;