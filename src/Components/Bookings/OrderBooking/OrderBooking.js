import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import "./OrderBooking.css"

const OrderBooking = () => {
    const [info, setInfo] = useState({})
    const { user } = useAuth()
    const { id } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "pending"
        console.log(data)
        axios.post("https://howling-tomb-43983.herokuapp.com/bookings", data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    alert("Booked Successfully")
                    reset()
                }
            })
    };

    useEffect(() => {
        axios.get(`https://howling-tomb-43983.herokuapp.com/info/${id}`)
            .then(res => {
                setInfo(res.data)
            })

    }, [])
    const { name, describe, price } = info !== undefined && info
    return (
        <div className="my-5 d-lg-flex">
            <div className="ms-3 App">
                <img width="700px" className="image" height="250px" src={info.img} alt="" />
                <h2>{name}</h2>
                <p>{describe}</p>
                <h5 className="fw-bold">Price: ${price} for One Person</h5>
            </div>
            <div>
                {name && <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="fst-italic">Book Here!!!</h2>
                    <input defaultValue={name} {...register("destinationName")} />
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" required {...register("address")} />
                    <input placeholder="City" defaultValue="" required {...register("city")} />
                    <input placeholder="phone number" defaultValue="" required {...register("phone")} />
                    <input type="date"  {...register("date")} />
                    <input type="submit" value="Submit" />
                </form>}
            </div>
        </div>
    );
};

export default OrderBooking;