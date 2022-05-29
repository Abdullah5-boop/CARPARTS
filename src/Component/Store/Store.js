import React, { useState } from 'react';
import HomapageProductView from '../Home/HomapageProductView';
import ProductHook from '../Hooks/ProductHook';
import Modal from '../Modal/Modal';
import Nav2 from '../Nav/Nav2';

const Store = () => {
    const [product, setproduct] = ProductHook()
    const [buyproduct, setbuyproduct] = useState({})

    console.log(product)
    return (
        <div>
            <Nav2></Nav2>
            <h1 className='text-center font-bold text-4xl my-12 '>Our Store</h1>
            <section data-aos="fade-right" data-aos-duration="1000">
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    {/* <HomapageProductView data={} ></HomapageProductView> */}
                    {
                        product?.map(data => <HomapageProductView data={data} setbuyproduct={setbuyproduct}></HomapageProductView>)
                    }
                        </div>
                    {
                        buyproduct && <Modal  data={buyproduct}></Modal>
                    }
            </section>
        </div>
    );
};

export default Store;