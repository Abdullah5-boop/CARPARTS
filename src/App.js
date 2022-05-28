import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
// import Banner from './Component/Banner/Banner';
import Productpage from './Component/Product/Productpage';
import Loginpage from './Component/Login/Loginpage';
import Registerpage from './Component/Register/Registerpage';
import Banner from './Component/Banner/Banner';
import Home from './Component/Home/Home';
import { createContext, useState } from 'react';
import RequireAuth from './RequireAuth';
import Dashnord from './Component/DasshBord/Dashnord';
import Order from './Component/Order.js/Order';
import Payment from './Component/Payment/Payment';
import DashbordReview from './Component/DasshBord/DashbordReview';
import Profile from './Component/DasshBord/Profile'
import { ToastContainer, toast } from 'react-toastify';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import 'react-toastify/dist/ReactToastify.css'; import AllUser from './Component/DasshBord/AllUser';
import NoDiviceFound from './Component/NoDiviceFound';
export const UserContex = createContext("user");
const queryClient = new QueryClient()
function App() {
  const [user, setuser] = useState([])
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserContex.Provider value={[user, setuser]}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product' element={<RequireAuth><Productpage></Productpage></RequireAuth>}></Route>
            <Route path='/orders/:email' element={<RequireAuth><Order></Order></RequireAuth>}></Route>
            <Route path='/login' element={<Loginpage></Loginpage>}></Route>
            <Route path='/register' element={<Registerpage></Registerpage>}></Route>
            <Route path='/payment/:email/:id' element={<Payment></Payment>}></Route>
            <Route path='/dashbord' element={<Dashnord></Dashnord>}>
              {/* <Route index element={<DashbordReview></DashbordReview>}></Route> */}
              <Route index  element={<Profile></Profile>}></Route>
              <Route path='orders/:email' element={<Order></Order>}></Route>
              <Route path='alluser' element={<AllUser></AllUser>}></Route>
            </Route>
            <Route path='/orders' element={<RequireAuth><Order></Order></RequireAuth>}></Route>
            <Route path='*'element={<NoDiviceFound></NoDiviceFound>}></Route>
          </Routes>
        </UserContex.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
