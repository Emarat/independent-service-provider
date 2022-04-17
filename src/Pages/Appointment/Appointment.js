import React from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const { appointmentId } = useParams();
    return (
        <div className='text-center mt-3'>
            <h2>Get Your Appointment For: {appointmentId}</h2>
        </div>
    );
};

export default Appointment;