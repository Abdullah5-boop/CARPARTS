import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

const Modal = ({ data, setmain }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [productverify, setproductverify] = useState(false);
    const [user] = useAuthState(auth)
    const varify = user?.emailVerified
    const email = user?.email
    const _id = data._id
    const min = parseInt(data.min);
    const max = parseInt(data.max)
    const Engine = data.Engine;
    const price = data.price
    const img = data.img

    const [amount, setamount] = useState([])
    const [error, seterror] = useState("")


    // console.log(data)
    const onSubmit = data => {
        data.UserEmail = email
        data._id = _id
        data.Engine = Engine
        data.paid = false
        data.price = price
        data.img = img
        const value = parseInt(data?.quantity)
        if (value < max && value > min) {

            seterror("")
            fetch("https://shielded-beyond-16866.herokuapp.com/order",
                {
                    headers: {

                        'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setproductverify(true)
                })
                .catch(error => console.log(error))
            toast.success("Successfully added on order page")
            setTimeout(function () {
                toast.success("Go to dashbord->order and find your all order");
            }, 3000);
        }
        else {
            console.log("in if")
            seterror("please decrease the quantity")
            toast.error("please decrease the quantity")

        }




    }
    return (
        <section>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    {
                        // varify ?
                        <div className='text-center'>
                            <h2 className='text-center'>Order Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input value={email} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mb-3" />
                                <input value={data.Engine} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mb-3" />
                                <input
                                    type="text" placeholder="Location" class="input input-bordered w-full max-w-xs mb-3"
                                    {...register("Location", { required: true })} />
                                <input
                                    type="number" placeholder="Amount" class="input input-bordered w-full max-w-xs mb-3"
                                    {...register("quantity", { required: true })} />
                                <div>
                                    {/* {errors?.Location?.type === 'required' && "value is not applicable"}
                                        {errors?.quantity?.type === 'required' && "Please increase the quantity "} */}
                                </div>
                                <h2 className='text-red-500 '>
                                    {error ? error : ""}
                                </h2>
                                <div class="modal-action flex justify-center  ">


                                    <input class="btn btn-success" type="submit" />
                                </div>
                            </form>


                        </div>
                        // :
                        // <h1 className='text-center font-bold text-red-500'>Email is not verified</h1>
                    }

                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>

                </div>
            </div>
            <ToastContainer />
        </section >
    );
};

export default Modal;