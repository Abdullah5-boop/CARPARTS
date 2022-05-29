import React from 'react';
import { toast } from 'react-toastify';
import DashbordHook from '../DasshBord/DashbordHook';


const Pending = () => {
    const { isLoading, error, Order, refetch } = DashbordHook()
    console.log(Order)
    const handleSfit = data => {

        fetch(`http://localhost:5000/shift/${data?._id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({})
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    refetch()
                    toast.success("Confim Shipping ")
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div data-aos="fade-down" class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Product Name </th>
                            <th>Email</th>
                            <th>Qunatity</th>
                            <th>Location</th>
                            <th>Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Order?.map(data =>
                                <tr>
                                    <td>{data?.Engine}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.quantity}</td>
                                    <td>{data?.Location}</td>
                                    <td>
                                        {
                                            data?.paid ? <>
                                                {
                                                    data?.shift ?
                                                        <button disabled onClick={() => handleSfit(data)} className='btn'>Shift Completed</button>

                                                        :
                                                        <button onClick={() => handleSfit(data)} className='btn'>Shift Now</button>
                                                }
                                            </>
                                                :
                                                <button className='btn' disabled>Not Paid Yet</button>

                                        }

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default Pending;