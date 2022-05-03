import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

import { useForm } from "react-hook-form";

const ManageEvents = () => {
    const [event, setEvent] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch("http://localhost:5000/upcommingevent")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setEvent(data)
            })
    }, [])
    console.log(event)
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }
    const handleEventDetail = useNavigate()
    const handleDetail = (id) => {
        handleEventDetail(`/manageEventDetail/${id}`)
    }

    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center">Add New Upcoming Event</h4>
                            <input type="text" className="form-control border-0 border-bottom mb-4" placeholder="Place Name" {...register("name", { required: true })} />

                            <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Message" {...register("message", { required: true })} />

                            <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Description" {...register("shortDescription", { required: true })} />

                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Present Price" {...register("presentPrice", { required: true })} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Previous Price" {...register("previousPrice", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Days" {...register("days", { required: true })} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Nights" {...register("nights", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Date etc: 20 May to 23 May" {...register("eventDate", { required: true })} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Peoples" {...register("peoples", { required: true })} />
                                </div>
                            </div>

                            <input type="file" className="form-control mb-4 border-0 border-bottom" placeholder="Photo" {...register("displayPhoto", { required: true })} />




                            <input type="submit" />
                        </form>
                    </div>
                    <div className="col-md-7">
                        <h4 className="mt-3 text-center">All Upcoming Event are Below </h4>
                        <div className="table-responsive">
                            <table className="table table-hover table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Place</th>
                                        <th scope="col">Days</th>
                                        <th scope="col">Peoples</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        event.map(ele => <tr key={Math.random()}>
                                            <td><img src={ele.displayPhoto} alt="" width="100px" /></td>
                                            <td>{ele.name}</td>
                                            <td>{ele.days}</td>
                                            <td>{ele.peoples}</td>
                                            <td>{ele.presentPrice}</td>
                                            <td><button onClick={() => handleDetail(ele._id)} className="btn btn-success">Details</button></td>
                                            <td><button className="btn btn-danger">Remove</button></td>
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div style={horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ManageEvents;