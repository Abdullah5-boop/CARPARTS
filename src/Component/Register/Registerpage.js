import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { UserContex } from '../../App';
import auth from '../../Firebase.init';
import FirebaseHook from '../Hooks/FirebaseHook';
import Nav from '../Nav/Nav';
import Nav2 from '../Nav/Nav2';
// import "./Loginpage.css"
const Registerpage = () => {
    // const [user] = useAuthState(auth)
    const [user, setuser] = useContext(UserContex)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [error, setserror] = useState('')
    const { GoogleSignin,AddfirebaseUser } = FirebaseHook()




    const verifyemail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification sent!")
            });
    }

    console.log(user)
    const handleregistationsubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // verifyemail()
                setuser(user)
                setserror('')
                if (user) {

                    const type = "user";
                    const firebaseuser = { email: email, type: type }
                    fetch("http://localhost:5000/register",
                        {
                            headers: {
                               
                                'Content-Type': 'application/json'
                            },
                            method: "PUT",
                            body: JSON.stringify(firebaseuser)
                        })
                        .then(res => res.json())
                        .then(data => console.log("register data = ",data))
                        .catch(error => console.log(error))
                    AddfirebaseUser(user)
                }
            })
            .catch((error) => {
                setserror(error.message)
                console.log(error.message)
            });






    }
    return (
        <div>
            <Nav2></Nav2>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className='mb-36'>
                <section className='flex justify-center ' >
                    <div className=" mt-12  grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 ">
                        <div className="imgcontainerlogin sm:col-span-1 lg:col-span-2">
                            <img src="https://i.ibb.co/2SzktCd/modern-comfortable-workplace-home-there-are-computer-laptop-table.jpg" alt="" />
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body justify-center">
                                <h3 className='font-bold text-4xl text-center mb-3'>Register</h3>
                                <form onSubmit={handleregistationsubmit}>
                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input required type="email" name='email' onChange={(event) => { setemail(event.target.value) }} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Password</span>
                                        </label>
                                        <input required onChange={(event) => { setpassword(event.target.value) }} type="password" name='password' placeholder=" Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input required type="password" name='confimpassword' onChange={(event) => { setconfirmpassword(event.target.value) }} placeholder=" Confirm password" className="input input-bordered" />

                                        <h1 className='text-red-600'>
                                            {
                                                error ? error : ""
                                            }
                                        </h1>

                                    </div>
                                </form>
                                <div className="form-control mt-6">
                                    <button onClick={handleregistationsubmit} className="btn btn-primary">Sign Up</button>
                                </div>
                                <section>
                                    <div class="flex flex-col w-full border-opacity-50">
                                        <div class="divider">OR</div>
                                    </div>
                                </section>

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

export default Registerpage;