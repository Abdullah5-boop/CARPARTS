import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Modal2 = ({ data }) => {
    const [reviewtextarea, setreviewtextarea] = useState("")

    const handleAddReview = () => {
        const review = { review: reviewtextarea, productName: data?.Engine, email: data?.email, id: data?._id }
        fetch("http://localhost:5000/review",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <input type="checkbox" id="review-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Review for {data.Engine}</h3>
                    {/* <textarea class="textarea textarea-primary  " placeholder="Bio"></textarea>                 */}
                    <textarea name="" id="" cols="60" rows="8" class="textarea textarea-ghost " placeholder='Write Your Review' onChange={(e) => setreviewtextarea(e.target.value)}></textarea>
                    <div class="modal-action">
                        <label for="review-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <label for="review-modal" className='btn btn-primary' onClick={() => handleAddReview()} class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal2;