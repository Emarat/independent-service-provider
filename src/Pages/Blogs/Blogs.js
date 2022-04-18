import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <>
            <div className='mt-3'>
                <Card>
                    <Card.Header>1. Difference between authorization and authentication</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{' '}
                                Simply, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. {' '}
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
            <div className='mt-3'>
                <Card>
                    <Card.Header>2 Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. {' '}
                                <br />
                                There are many alternatives to Firebase like Back4App, Parse, AWS Amplify, Backendless, Kuzzle , Supabase  & many more!
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
            <div className='mt-3'>
                <Card>
                    <Card.Header>3 What other services does firebase provide other than authentication</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.{' '}

                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Blogs;