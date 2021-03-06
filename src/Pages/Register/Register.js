import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        console.log('user', user);
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Not Matched');
            return;
        }
        if (password.length < 6) {
            setError('Password Must be 6 Characters!')
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

    }

    return (
        <form onSubmit={handleCreateUser}>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                                        <p className="text-white-50 mb-5">Please Enter Required Information!</p>
                                        <div className="form-outline mb-3">
                                            <input onBlur={handleNameBlur} type="text" id="form3Example1cg" className="form-control form-control-lg" required />
                                            <label className="form-label">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onBlur={handleEmailBlur} type="email" id="form3Example3cg" className="form-control form-control-lg" required />
                                            <label className="form-label" >Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onBlur={handlePasswordBlur} type="password" id="form3Example4cg" className="form-control form-control-lg" required />
                                            <label className="form-label">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onBlur={handleConfirmPasswordBlur} type="password" id="form3Example4cdg" className="form-control form-control-lg" required />
                                            <label className="form-label">Repeat your password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label">
                                                I agree all statements in Terms of service!
                                            </label>
                                        </div>
                                        <p style={{ color: 'red' }}>{error}</p>
                                        <div>
                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Have already an account? <Link to="/login" className="text-white-50 fw-bold text-decoration-none">Login</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default Register;