import React from 'react';
import { useQuery } from 'react-query';
import DashBordHook from '../Hooks/DashBordHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const Shift = () => {
    const { isLoading, error, data: AllSHIFT, refetch } = useQuery('PeendingData', () =>
        fetch('http://localhost:5000/AllShift').then(res =>
            res.json()
        )
    )
    console.log(AllSHIFT)


    return (
        <div data-aos="fade-up">
            <h1 className='text-center font-bold text-4xl my-10'>List of shipping product </h1>
            <section>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Eamil</th>
                                <th>Quantity</th>
                                <th>Location</th>
                                <th>Status</th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                AllSHIFT?.map(data =>
                                    <tr>
                                        <td>{data?.Engine}</td>
                                        <td>{data?.email}</td>
                                        <td>{data?.quantity}</td>
                                        <td>{data?.Location}</td>
                                        <td>
                                            <FontAwesomeIcon className='text-[#22c55e]' icon={faCircleCheck} />
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
};

export default Shift;