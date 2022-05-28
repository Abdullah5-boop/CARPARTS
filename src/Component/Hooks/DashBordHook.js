import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';

const DashBordHook = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { isLoading, error, data: UserList, refetch } = useQuery('dashbordHook', () =>
        fetch(`https://shielded-beyond-16866.herokuapp.com/alluser/${email}`).then(res =>
            res.json()
        )
    )
    console.log(UserList)
    return { isLoading, error, UserList, refetch }

}

export default DashBordHook;