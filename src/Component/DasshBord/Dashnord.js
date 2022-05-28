import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import DashBordHook from '../Hooks/DashBordHook';
import Nav2 from '../Nav/Nav2';
import ProfileHook from './ProfileHook';

const Dashnord = () => {

    const [user] = useAuthState(auth)
    // const { Order } = ProfileHook()
    const { isLoading, error, UserList, refetch } = DashBordHook()
    const navigate = useNavigate()
    // const data=Order[0]
    const [Order, setOrder] = useState([])
    const handleclick = () => {
        navigate(`orders/${user?.email}`)


    }
    console.log(UserList)




    return (
        <div>
            <Nav2></Nav2>
            <section>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content ">

                        <Outlet></Outlet>
                        {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                            {/* <li><Link to='profile'>profile</Link></li> */}
                            <li><button onClick={handleclick}>Order</button></li>
                            {/* <li> <Link to='alluser'>All User</Link></li> */}
                            <li>
                                {
                                    UserList?.map(data => <>
                                        {
                                            data.type === 'admin' ?
                                                <Link to='alluser'>All User</Link>

                                                : "user"
                                        }

                                    </>)
                                }
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashnord;