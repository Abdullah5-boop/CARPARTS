import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AllUser = () => {

    const { isLoading, error, data: customer, refetch } = useQuery('repoData', () => fetch('https://shielded-beyond-16866.herokuapp.com/alluser').then(res => res.json()))
    const makeadmin = (data) => {
        console.log(data)
        fetch("https://shielded-beyond-16866.herokuapp.com/alluser",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) { refetch() }
            })
            .catch(data => console.log(data))

    }
    if (isLoading) {
        return <Loading></Loading>
    }

    const Allcustomer = customer?.filter(data => data.email != null)



    // if (customer?.length === 0) {
    //     refetch()
    // }
    console.log(customer.length)

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            Allcustomer?.map((data, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.email}</td>
                                    <td>{data.type}</td>
                                    <td>
                                        {
                                            data.type === 'user' ?
                                                <button onClick={() => makeadmin(data)} className='btn'>Make Amin</button>
                                                :
                                                " this is not user"
                                        }
                                    </td>


                                </tr>
                            </>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;