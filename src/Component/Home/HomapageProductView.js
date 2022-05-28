import React from 'react';

const HomapageProductView = ({ data, setbuyproduct }) => {

    const discreption = data.discription.slice(0, 50);
    const discreptions = discreption + "..."
    // const setbuyproduct=setbuyproduct.setbuyproduct
    const SubmitPurchuces = (data) => {
        // console.log(data)
    }
    return (
        <li>
            <div>
                <div class="card min-w-screen bg-base-100 shadow-xl">
                    <div className=''>
                        <figure><img className='object-cover h-96 w-96' src={data.img} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">{data.Engine}</h2>
                        <div className='flex'>
                            <h2 className='font-bold mr-4'>Minimum order : </h2>{data.min}
                        </div>
                        <div className='flex'>
                            <h2 className='font-bold mr-4'>Maximum order : </h2>{data.max}
                        </div>
                        <div className='flex'>
                            <h2 className='font-bold mr-4'>Price per product: </h2>{data.price} $
                        </div>

                        <p>{discreptions}</p>
                        <div class="card-actions justify-end bg-slate-800 rounded-lg">

                            {/* <label for="my-modal-6" >open modal</label> */}

                            <label onClick={() => setbuyproduct(data)} for="my-modal" class="btn btn-block  btn-primary " >open modal</label>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default HomapageProductView;