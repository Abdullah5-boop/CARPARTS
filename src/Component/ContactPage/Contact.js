import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Contact = () => {
    const [contact, setcontact] = useState([])
    useEffect(() => {
        fetch('Location.json')
            .then(res => res.json())
            .then(data => setcontact(data))
    }, [])
    console.log(contact)
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-36 text-orange-700'>Contact Us </h2>
            <div class="h-96 w-screen  carousel-vertical rounded-box grid grid-cols-1 lg:grid-cols-4 border-8">
                {
                    contact?.map(data => <>

                        <div>
                            <div class="modal-box ">
                             <div className='flex items-center'>
                             <p className='font-bold'>Phone : </p>  <p class="py-4">{data.phone}</p>
                             </div>
                                <h3 class="text-lg font-bold">{data.city}, {data.country}</h3>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div >
    );
};

export default Contact;