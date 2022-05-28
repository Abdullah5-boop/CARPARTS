import { useContext, useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { UserContex } from "../../App"
import auth from "../../Firebase.init"
import Order from "../Order.js/Order"

const OrderHook = () => {
    // const [user, setuser]=useContext(UserContex)
    const [user] = useAuthState(auth)
    // const [Order, setorder] = useState([])
    const email = user?.email;
    // useEffect(()=>{
    //     fetch(`https://shielded-beyond-16866.herokuapp.com/orders/${email}`)
    //     .then(res=>res.json())
    //     .then(data=>setorder(data))
    // },[])
    const { isLoading, error, data: Order, refetch } = useQuery('repoData', () =>
        fetch(`https://shielded-beyond-16866.herokuapp.com/orders/${email}`).then(res =>
            res.json()
        )
    )
    console.log(Order)

    return { Order, isLoading, error, refetch };
}
export default OrderHook