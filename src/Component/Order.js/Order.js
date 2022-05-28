import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import OrderHook from '../Hooks/OrderHook';
import Loading from '../Loading/Loading';
import Modal2 from '../Modal/Modal2';
import Nav2 from '../Nav/Nav2';

const Order = () => {
    const [user] = useAuthState(auth)
    const { Order, isLoading, error, refetch } = OrderHook()
    const [payment, setpayment] = useState({})
    const [review, setreview] = useState([])
    const navigate = useNavigate()
    const email = user?.email;
    if (isLoading) {

        return <Loading></Loading>
    }
    
    if (error) {
        console.log(error)
    }
    // console.log(email)
    
    const handlepayment = (data) => {
        const _id = data._id;
        // const email = user?.email;
        navigate(`/payment/${email}/${_id}`)
    }
    
    
    if (Order.length === 0) {
        refetch()
    }

    const handleDeleteOrder = (data) => {
        const _id = data._id;
        console.log(_id)
        const url = `https://shielded-beyond-16866.herokuapp.com/user/${_id}`
        fetch(url, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            console.log(data)
        })
        
        
    }
    console.log(Order)
    
    
    
    
    
    
    return (
        <div >

            <section className=''>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>Number </th>
                                <th>Product Name</th>
                                <th>Quantity</th>
        
                                <th>Delete</th>
                                <th>Payment</th>
                                {

                                }
                                <th>Add review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Order?.map((data, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{data?.Engine}</th>
                                        <td>{data?.quantity}</td>
                                        <td>
                                            {
                                                data.paid ? "Not applicable" : 
                                                <>
                                                {/* {confirm("hekoio")} */}
                                                <button onClick={() => handleDeleteOrder(data)}  className='btn'>delete</button>
                                                </>
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.paid ? <h1 className='ml-10 text-left font-bold'>paid</h1> :
                                                    <td><button className='btn' onClick={() => handlepayment(data)}>Payment</button></td>
                                            }
                                        </td>
                                        <td>
                                            <label onClick={ () => 
                                                
                                                setreview(data)
                                                
                                                } for="review-modal" class="btn modal-button">Add Review </label>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        review && <Modal2 data={review}></Modal2>
                    }
                </div>

            </section>
        </div>
    );
};

export default Order;