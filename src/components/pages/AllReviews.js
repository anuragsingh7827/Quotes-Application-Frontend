import React, { useState } from 'react';
import axios from 'axios';
import AddReview from './AddReview';
import AddedReviews from './AddedReviews';
import styles from './AllReviews.module.css'

const AllReviews = ({quoteId}) => {

    const [isLoading, setisLoading] = useState(true);
    const [isClicked, setisClicked] = useState(false);
    const [reviews, setreviews] = useState([]);

    const showReviewsHandler = async() => {
        setisClicked(true);

        try{
            const response = await axios.get(`https://great-quotes.onrender.com/quotes/${quoteId}/reviews`);
            response.data ? setreviews(response.data.map((review) => review.comment))
                             : setreviews([]);

            setisLoading(false);
        }
        catch(e){
            console.log('Cannot fetch reviews at the moment');
            setisLoading(false);
        }

    }

    const addReview = (review) => {
        setreviews([...reviews, review]);
    }

    return (
            isClicked ? (isLoading ?    <div className={styles.wrapper}>
                                            <div className={styles.outer}></div>
                                            <div className={styles.inner}></div>
                                        </div>
                                    :   <div>
                                            <AddReview quoteId={quoteId} addReview={addReview}/>
                                            <AddedReviews reviews={reviews}/>
                                        </div>)
                            :   <div className={styles.btnWrapper}>
                                    <button type='button' className={styles.btn}
                                        onClick={showReviewsHandler}>
                                        Load Comments
                                    </button>
                                </div>
    
    )
}

export default AllReviews
