import React from 'react';
import { Card } from 'react-bootstrap';
import pic from '../../images/42.jpg';

const About = () => {
    return (
        <>
            <h2 className='text-center mt-3'>ABOUT ME</h2>
            <div className='d-flex justify-content-center mt-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='img-fluid img-thumbnail' variant="top" src={pic} />
                    <Card.Body>
                        <Card.Title>MD EMARAT HOSSAIN</Card.Title>
                        <Card.Text>
                            <small>
                                The main objective when working as a developer is to be productive and deliver value to the company. As a developer or a CTO, the aim is to build practical applications that will be 100% successful.
                            </small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>

    );
};

export default About;