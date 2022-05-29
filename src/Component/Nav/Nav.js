import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContex } from '../../App';
import auth from '../../Firebase.init';
import Dashnord from '../DasshBord/Dashnord';
import FirebaseHook from '../Hooks/FirebaseHook';
// import "./Nav.css"
const Nav = () => {
    // const [user,setuser]=useContext(UserContex)
    const { handleSignOut } = FirebaseHook()
    const [user] = useAuthState(auth)

    const [HandleNav, setHandleNav] = useState(false)
    const menubar = <>
        <li className='text-black'><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/product'>Blog</NavLink></li>
        <li><NavLink to='/store'>Store</NavLink></li>
        <li><NavLink to='/info'>Myself</NavLink></li>

        {
            user?.uid ? <>
                <li><NavLink to='/dashbord'>DashBord</NavLink></li>
                <li><button onClick={handleSignOut}>Logout</button> </li>
            </>
                :
                <>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                </>
        }
        
    </>
    return (
        <div className=''>
            <div className="navbar text-black flex justify-between">
                <div className="navbar-start flex justify-center">
                    <div className="dropdown ">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menubar}
                            {/* <li>Banner</li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl lg:mr-40">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 mr-5 text-black ">
                        {menubar}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                </div> */}

            </div>

        </div>
    );
};

export default Nav;