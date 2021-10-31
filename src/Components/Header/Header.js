import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth()
    // console.log(user)



    return (
        <div className="sticky-top">
            <Navbar className="px-4 " bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{ color: 'orange' }}>TourX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><NavLink className="text-decoration-none text-light fs-5" to="/home">Home</NavLink></Nav.Link>
                            {user.email && <Nav.Link><NavLink className="text-decoration-none text-light fs-5" to="/mybookings">My Bookings</NavLink></Nav.Link>}
                            {user.email && <Nav.Link ><NavLink className="text-decoration-none text-light fs-5" to="/admin">Admin</NavLink></Nav.Link>}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        {user.email ?
                            <NavLink onClick={logout} className={"text-decoration-none text-light fs-5 px-5"} to="/login">LogOut</NavLink> : <NavLink className="text-decoration-none text-light fs-5 px-5" to="/login">LogIn</NavLink>
                        }
                        {user.email && <div className="">
                            <div className="">
                                <img src={user.photoURL} width="32" height="32" className="rounded-circle" alt="" />
                                <span className="ms-3 text-light">{user.displayName}</span>
                            </div>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;