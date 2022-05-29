import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const ReviewSection = ({ email }) => {

    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch(`http://localhost:5000/review/${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const review = reviews.slice(0, 3)
    // console.log(review)

    return (
        <div className=''>
            <h2 className='text-center font-bold text-5xl my-12'>My review</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-7  '>
                {
                    review.map(data => <>

                        <div class="card w-96 bg-orange-500 text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title">{data?.ProductName}</h2>
                                <p>{data?.content}</p>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;