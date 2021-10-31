import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Button from '@mui/material/Button';


const MyBookings = () => {
    const { user } = useAuth()
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/mybookings/${user.email}`)
            .then(res => {
                // console.log(res.data)
                setBookings(res.data)
            })
    }, [])

    const handleCancelNow = (id) => {
        console.log(id)
        const confrimation = window.confirm("Are Sure You Want To Cancel?")
        if (confrimation) {
            axios.delete(`http://localhost:5000/mybookings/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        alert("Canceled Successfully")
                        setBookings(res.data)
                    }
                })
        }
    }

    return (
        <div className="App my-5">
            <h2>You Have Booked {bookings.length || 0} Destinations</h2>
            <div>
                {bookings.length > 0 &&
                    bookings.map(booking => <div key={booking._id}>
                        <h2>{booking.destinationName}</h2>
                        <small>Date of booking: {booking.date}</small> <br />
                        <Button onClick={() => handleCancelNow(booking._id)} variant="contained" color="error" size="small"> Cancel Now</Button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookings;