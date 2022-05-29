import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutForm = ({ price, email, handlepaymentupdate, id }) => {
    const [errors, seterror] = useState('')
    const stripe = useStripe()
    const [secret, setsecret] = useState('')
    const [success, setsuccess] = useState('')
    const [payment_intend, setpayment_intend] = useState()
    const [tid, settid] = useState('')
    const [isloading, setloading] = useState(false);
    const elements = useElements()
    const mainprice = price * 100
    const navigate = useNavigate()


    console.log(tid)

    useEffect(() => {


        fetch("http://localhost:5000/create-payment-intent",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify({ mainprice })
            })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    console.log(data.clientSecret)
                    setsecret(data.clientSecret);
                }
            })

    }, [mainprice])


    const handleSubmit = async (event) => {


        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        seterror(error?.message || "")
        setloading(true);
        //confim payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            secret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setloading(false)
            setsuccess('')
            seterror(intentError?.message)
        }
        else {
            setloading(false)
            settid(paymentIntent?.id)
            seterror("")
            setsuccess('payment Successfull')
            toast.success("payment Successfull")
            // console.log(paymentIntent)
            setpayment_intend(paymentIntent)
            const data = { email, tid, paid: true, id }
            fetch(`http://localhost:5000/ordersupdate`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => {
                    setloading(false);
                    console.log(data);

                })
            // navigate('/orders')

        }


    }
    // if(isloading)
    // {return <Loading></Loading>}


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-5' type="submit" disabled={!stripe || !secret}>
                    Pay
                </button>
            </form>
            {
                errors && <p className='text-red-500'>{errors}</p>
            }
            {

                success && <p className='text-green-500'>{success}</p>
            }
            <ToastContainer />
        </>
    );
};

export default CheckoutForm;