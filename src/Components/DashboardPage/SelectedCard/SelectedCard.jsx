import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectedCard = (props) => {
    const { displayPhoto, name, packagePresentPrice, status, totaldays, _id } = props.singleData
    const packageDetails = useNavigate()
    const handleNavigate = (id) => {
        packageDetails(`/detailsPackage/${id}`)
    }
    return (
        <div className="col-md-4 my-2">
            <div className="card">
                <img src={displayPhoto} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    <h6 className="lead my-3 text-center">Price : {packagePresentPrice}</h6>
                    {/* <h6 className="card-text">Ordering Status : {status}</h6>
                    <h6 className="card-text">Days : {totaldays}</h6> */}
                    <div className="d-flex justify-content-center">
                        <button onClick={() => handleNavigate(_id)} href="#" className="btn btn-primary">Go Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;