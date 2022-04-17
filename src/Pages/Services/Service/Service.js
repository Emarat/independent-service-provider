import React from 'react';

const Service = ({ service }) => {
    const { name, img, description } = service;
    // console.log(service)
    return (
        <div className="border-dark rounded-2 col-sm-12 col-md-6 col-lg-4 g-3">
            <div className='card p-2' style={{ width: "18rem" }}>
                <img className='rounded mx-auto d-block' src={img} alt="" />
                <h5 className='text-center'>{name}</h5>
                <p><small>{description}</small></p>
                <button class="btn btn-outline-dark" type="submit">GET APPOINTMENT</button>
            </div>
        </div>
    );
};

export default Service;