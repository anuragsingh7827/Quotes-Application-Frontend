import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Quote.module.css'

const Quote = ({author, text, quoteId}) => {

    const navigate = useNavigate();

    const showQuoteHandler = () => {
        navigate(`/${quoteId}`);
    }


    return (
        <li className={styles.listItems}>
            <div className={styles.content}>
                <p className={styles.quote}>{text}</p>
                <p className={styles.author}>{author}</p>
            </div>
            <button className={styles.btn} type='button' onClick={showQuoteHandler}>
                View Fullscreen
            </button>
        </li>
    )
}

export default Quote
