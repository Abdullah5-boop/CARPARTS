import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ADDPriduct = () => {
    const handleadd = () => {
        console.log('hello world ')
    }
    const handleaddproduct = (event) => {
        event.preventDefault()
        const Engine = event.target.Engine.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const min = event.target.min.value
        const max = event.target.max.value
        const discription = event.target.dis.value
        const newproduct = { Engine, img, min, max, discription, price }
        console.log(newproduct)
        event.target.dis.value = ""
        event.target.Engine.value = ""
        event.target.price.value = ""
        event.target.img.value = ""
        event.target.min.value = ""
        event.target.dis.value = ""
        event.target.max.value = ""

        fetch("http://localhost:5000/addpost",
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(newproduct)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product Added')
            })
            .catch(error => console.log(error))
    }

    return (
        <div data-aos="zoom-in" className='text-center'>
            <h1 className=' font-bold text-3xl mb-12'> Add Product  </h1>
            <div className=''>
                <form className='' onSubmit={handleaddproduct}>
                    <input type="text" name='Engine' placeholder="Engine name" class=" input input-bordered w-full max-w-xs mt-4" /> <br />
                    <input type="number" name='price' placeholder="price" class="input input-bordered w-full max-w-xs mt-4" /> <br />
                    <input type="number" name='max' placeholder="max" class="input input-bordered w-full max-w-xs mt-4" /><br />
                    <input type="number" name='min' placeholder="min" class="input input-bordered w-full max-w-xs mt-4" /> <br />
                    <input type="text" name='img' placeholder="img url" class="input input-bordered w-full max-w-xs mt-4" /> <br />
                    <input type="text" name='dis' placeholder="discreption" class="input input-bordered w-full max-w-xs mt-4" /> <br />
                    {/* <textarea class="textarea textarea-bordered" name='dis' placeholder="Bio"></textarea> */}
                    <button class="btn btn-wide mt-4">Wide</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ADDPriduct;