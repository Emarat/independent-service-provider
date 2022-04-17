import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                                    <p className="text-white-50 mb-5">Please Enter Required Information!</p>
                                    <div class="form-outline mb-3">
                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" required />
                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" required />
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" required />
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" required />
                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3cg"
                                        />
                                        <label class="form-check-label" for="form2Example3g">
                                            I agree all statements in Terms of service!
                                        </label>
                                    </div>
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
    );
};

export default Register;