import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';

import { UserContex } from '../../App';
import auth from '../../Firebase.init';
import FirebaseHook from '../Hooks/FirebaseHook';
import Nav from '../Nav/Nav';
import Nav2 from '../Nav/Nav2';
import "./Loginpage.css"
// import {  } from 'react-firebase-hooks/auth';
const Loginpage = () => {
    const [user, setuser] = useContext(UserContex)
    console.log(user)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { GoogleSignin, handleforgetpassword } = FirebaseHook()
    let from = location.state?.from?.pathname || "/";

    const forgetpassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("email is sent")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterror(errorMessage)
                
            });
    }


    const handlelogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                setuser(user)
                if (user) {
                    navigate(from, { replace: true });
                }


            })
            .catch((error) => {
               
                const errorMessage = error.message;
                seterror(errorMessage)
            });
    }

    return (
        <div>
            <Nav2></Nav2>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='mb-36'>
                <section className='flex justify-center ' >
                    <div className=" mt-12  grid lg:grid-cols-3 gap-y-5 ">
                        <div className="imgcontainerlogin lg:col-span-2">
                            <img src="https://i.ibb.co/2SzktCd/modern-comfortable-workplace-home-there-are-computer-laptop-table.jpg" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body justify-center">
                                <h3 className='font-bold text-4xl text-center mb-3 '>Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={(event) => setemail(event.target.value)} type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={(event) => setpassword(event.target.value)} type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <h2 onClick={forgetpassword} href="#" className="label-text-alt link link-hover">Forgot password?</h2>
                                    </label>
                                </div>
                                <h2 className='text-red-600'>
                                    {
                                        error ? error : ""
                                    }
                                </h2>
                                <div className="form-control mt-6">
                                    <button onClick={handlelogin} className="btn btn-primary">Login</button>
                                </div>
                                <hr />
                                <section className=''>
                                    <div className='text-center'>
                                        <button onClick={GoogleSignin} className='btn w-80 rounded-full mb-5'>
                                            <img width='30px' height='30px' src="https://i.ibb.co/4YMfSGC/1534129544.png" alt="" />
                                            Google
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Loginpage;