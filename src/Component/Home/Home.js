import React, { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import "../Banner/Banner.css"
import { UserContex } from '../../App';
import ProductHook from '../Hooks/ProductHook';
import HomapageProductView from './HomapageProductView';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import ReviewSection from '../ReviewSection.js/ReviewSection';
import Business from './Business';
import Footer from '../Footer/Footer';
import FirebaseHook from '../Hooks/FirebaseHook';
import About from '../About/About';
import Contact from '../ContactPage/Contact';
const Home = () => {
    // const [user, setuser] = useContext(UserContex)
    const { AddfirebaseUser } = FirebaseHook()
    const [user] = useAuthState(auth)
    const [product, setproduct] = ProductHook()
    const [main, setmain] = useState([])
    const email = user?.email
    // console.log(user)
    const products = product?.slice(0, 4)
    const [buyproduct, setbuyproduct] = useState({})
    const navigate = useNavigate()
    const handlemain = () => {
        navigate(`/orders/${email}`)

    }

    return (
        <div>

            <section className='imgcontainers '>
                <Nav></Nav>
                {/* <div className=' h-5/6 flex sm:items-center justify-center lg:items-center sm:p-0 lg:p-10 '> */}
                <div className=' h-5/6 flex  items-center justify-center lg:justify-start ml-10 '>
                    <div className='containers'>
                        <div><h2 className=' text-bold text-3xl lg:text-6xl'>
                            Best CarEngine  </h2>
                            <h2 className=' text-bold text-3xl lg:text-6xl'> Provider You Can Trust</h2></div>
                        <h2 className='text-[#ffffff] text-lg  mt-5'>we provide best car engines, bike engines, ship engine according you requirement</h2>
                        <div className=' text-center pt-12'>
                            <button className="  btn btn-outline btn-warning rounded-full  w-3/6">Button</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-36'>
                <h2 className='font-bold text-center text-4xl mb-72'>Our Products</h2>
                <div className=' flex justify-center items-center'>

                    <ul className=' cardpositioning grid gap-10 lg:grid-cols-4 justify-center'>

                        {
                            products.map(data => <HomapageProductView
                                data={data}
                                setbuyproduct={setbuyproduct}

                            ></HomapageProductView>)
                        }
                        {
                            buyproduct && <Modal setmain={setmain} data={buyproduct}></Modal>
                        }

                    </ul>
                </div>
            </section>
            <section className='mr-2 lg:mx-6'>
                <ReviewSection email={email}></ReviewSection>
            </section>
            <section className=''>
                <h2 className='text-center font-bold text-5xl text-primary mt-36'>Our Performance </h2>
                <h2 className='text-center font-bold text-3xl my-12'>Our Goal is customer satisfaction </h2>
                <Business></Business>
            </section>
            <about><About></About></about>
            <section><Contact></Contact></section>
            <footer className='mt-12'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;