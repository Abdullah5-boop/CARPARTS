import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import OrderHook from '../Hooks/OrderHook';
import ProfileHook from './ProfileHook';

const Profile = () => {
    const [user] = useAuthState(auth)
    const { Order, isLoading, error, refetch } = ProfileHook()
    const [edit, setedit] = useState(true)
    const [submit, setsetsubmit] = useState(false)

    const [img, setimg] = useState([])
    const [imgsuccess, setimgsuccess] = useState([])
    //   const data=Order[0]
    // console.log(user?.email)

    if (Order?.length === 0) {
        refetch()
    }
    // console.log(Order)

    const handleEdit = () => {
        setedit(true)
        setsetsubmit(false)

    }


    const handlesubmit = () => {
        setedit(false)
        setsetsubmit(true)

    }




    const handleimg = (event) => {
        const img = event.target.files[0];
        setimg(img)

    }





    const handleFormSubmit = (event) => {
        setedit(true)
        setsetsubmit(false)
        const email = user?.email;
        const link = event.target.SocalLink.value

        const imgstoreage = 'e8c15a39b1ea57156237076173e321f4'
        const url = `https://api.imgbb.com/1/upload?key=${imgstoreage}`
        const formdata = new FormData()
        formdata.append('image', img)
        console.log(formdata)
        fetch(url,
            {
                method: "POST",
                body: formdata
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data?.data?.url)
                if (data.success) {
                    const updatedetels = { img: data?.data?.url, email: email, Slink: link }
                    fetch("https://shielded-beyond-16866.herokuapp.com/updatedetails",
                        {
                            headers: {

                                'Content-Type': 'application/json'
                            },
                            method: "PATCH",
                            body: JSON.stringify(updatedetels)
                        })
                        .then(res => res.json())
                        .then(data => {
                            setimgsuccess(data)

                        })
                        .catch(error => console.log(error))
                }



            })
            .catch(error => console.log(error))

    }
    if (imgsuccess) { refetch() }



    // console.log(Order)

    return (
        <div>
            <h3 className='text-center font-bold text-3xl mt-5 mb-12'>This is profile page</h3>
            {
                Order?.map(data => <>

                    <div>
                        <div>
                            <img className='object-cover h-48 w-96' src={data.img} alt="" />
                        </div>
                        <div >
                            <h1 className='text-xl font-bold mt-8'>Email :  {user?.email} </h1>
                            <h1 className='mt-2' >type : {data?.type}</h1>
                            Social Link : <a className='link' target="blank" href={data?.Slink}>Click Here</a>

                        </div>
                    </div>
                </>)
            }
            {
                edit &&
                <>

                    <button className='btn' onClick={() => handlesubmit()} >edit</button>
                </>
            }

            {
                submit &&
                <>
                    <form onSubmit={handleFormSubmit} className='flex justify-between' >
                        <input type="text" name='Email' placeholder="Email" class="input input-bordered w-full max-w-xs " required />
                        <input type="text" name='SocalLink' placeholder="Socal Link" class="input input-bordered w-full max-w-xs " required />
                        <input name='file' onChange={handleimg} type="file" placeholder="" class="input input-bordered w-full max-w-xs " required />
                        <button className='btn'>submit</button>
                        <button class="btn btn-circle btn-outline text-center" onClick={handleEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </form>

                    <br />
                    {/* <button className='btn' onClick={() => handleEdit()}>hello world</button> */}
                </>
            }
        </div>
    );
};

export default Profile;