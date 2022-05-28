import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';

const DashBordHook = () => {
    const [user]=useAuthState(auth)
    const email=user?.email
    const { isLoading, error, data:UserList,refetch } = useQuery('dashbordHook', () =>
        fetch(`http://localhost:5000/alluser/${email}`).then(res =>
            res.json()
        )
    )
console.log(UserList)
return{ isLoading, error, UserList,refetch}

}

export default DashBordHook;