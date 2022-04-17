import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2 id='services' className='text-center m-4'>MY SERVICES</h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;