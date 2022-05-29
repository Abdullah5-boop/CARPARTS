import React from 'react';
import { useQuery } from 'react-query';

const DashbordHook = () => {
    const { isLoading, error, data: Order, refetch } = useQuery('PeendingData', () =>
        fetch('http://localhost:5000/order').then(res =>
            res.json()
        )
    )
    return { isLoading, error, Order, refetch }

};

export default DashbordHook;