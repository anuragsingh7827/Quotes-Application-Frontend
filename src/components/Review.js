import React from 'react'
import styles from './Review.module.css';


const Review = ({comment}) => {
    return (
        <li className={styles.listItems}>
            <p className={styles.comment}>{comment}</p>
        </li>
    )
}

export default Review
