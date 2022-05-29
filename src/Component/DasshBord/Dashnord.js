import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import DashBordHook from '../Hooks/DashBordHook';
import Nav2 from '../Nav/Nav2';
import ProfileHook from './ProfileHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPlus,faCartArrowDown,faListCheck,faHourglassEnd,faShip } from '@fortawesome/free-solid-svg-icons'

const Dashnord = () => {

    const [user] = useAuthState(auth)
    // const { Order } = ProfileHook()
    const { isLoading, error, UserList, refetch } = DashBordHook()
    const navigate = useNavigate()
    // const data=Order[0]
    const [Order, setOrder] = useState([])
    const handleclick = () => { navigate(`orders/${user?.email}`) }
    const handleadd = () => { navigate(`addproduct`) }
    console.log(UserList)




    return (
        <div>
            <Nav2></Nav2>
            <section>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content ">
                        <Outlet></Outlet>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">



                            <li><button className='btn btn-ghost btn-wide' onClick={handleclick}>
                            <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
                            Order
                            </button></li>


                            {
                                UserList?.map(data => <>
                                    {
                                        data.type === 'admin' ?
                                            <li className=''>

                                                <Link className='btn btn-ghost btn-wide' to='alluser'>  <FontAwesomeIcon className='text-xl ' icon={faUsers} />
                                                    All User
                                                </Link>

                                            </li>

                                            : "user"
                                    }
                                </>)
                            }
                            {
                                UserList?.map(data => <>
                                    {
                                        data.type === 'admin' ?
                                            <li>
                                                <Link className='btn btn-ghost btn-wide' to='addproduct'>
                                                    <FontAwesomeIcon icon={faPlus}/>
                                                    ADD product</Link>
                                            </li>
                                            : "user"
                                    }
                                </>)
                            }
                            {
                                UserList?.map(data => <>
                                    {
                                        data.type === 'admin' ?
                                            <div class="dropdown dropdown-hover cursor-pointer">
                                                <label tabindex="0" class="btn btn-ghost btn-wide ">
                                                <FontAwesomeIcon className='mr-4' icon={faListCheck}></FontAwesomeIcon>
                                                Manage
                                                </label>
                                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                       
                                                        <Link className='text-center' to='Pending'>Pending
                                                        <FontAwesomeIcon icon={faHourglassEnd}></FontAwesomeIcon>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to='Shift'>Shift
                                                        <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            : ""
                                    }
                                </>)
                            }

                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashnord;