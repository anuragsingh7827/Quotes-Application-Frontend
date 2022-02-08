import React from 'react'
import Review from '../Review';
import { v4 as uuid } from 'uuid';
import styles from './AddedReviews.module.css';

const AddedReviews = ({reviews}) => {

    const reviewsList = reviews.map((review) => {
        return <Review comment={review} key={uuid()}/>
    });

    return (
        reviewsList.length ?    <ul className={styles.reviewsList}>
                                    {reviewsList}
                                </ul> :
                                <div className={styles.content}>
                                    <p className={styles.noComments}>No comments yet!</p>
                                </div> 
                                
    )
}

export default AddedReviews
