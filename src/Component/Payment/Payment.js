import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav2 from '../Nav/Nav2';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L32NxLceKxAIYC505P022018V0bZyslvLRHzwLB9rjEliaGMoD16om0jN2HI7hdVLN7adjiBl3hdhSlHELLfYUy00K0QiZo8X');
    const data = useParams()
    const [products, setproduct] = useState([])
    const product = products[0]
    const email = data?.email;
    const id = data?.id

    const price = parseInt(product?.quantity) * parseInt(product?.price)
    const handlepaymentupdate = (data) => {
        console.log(data)
    }

    useEffect(() => {
        const url = `http://localhost:5000/payment/${email}/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setproduct(data))

    }, [])

    return (
        <div>
            <Nav2></Nav2>

            <section className='min-h-screen flex justify-evenly items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <div className=''><img className='object-cover h-48 w-96  ' src={product?.img} alt="" /></div>
                        <div class="card-body">
                            <h2 class="card-title">{product?.Engine}</h2>
                            <p>Quantity : {product?.quantity}</p>
                            <p>Total Price : {price} $ </p>

                        </div>
                    </div>
                    <div className=' flex items-center'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm price={price} email={email} handlepaymentupdate={handlepaymentupdate} id={id} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Payment;