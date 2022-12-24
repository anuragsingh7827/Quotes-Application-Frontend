import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from '../Quote';
import { useNavigate } from 'react-router-dom';
import styles from './AllQuotes.module.css'

const AllQuotes = () => {

    const [quotes, setquotes] = useState([]);

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        async function fetchAllQuotes(){

            try{
                const response = await axios.get('https://great-quotes.onrender.com/quotes');
                setquotes(response.data);
            
                setisLoading(false);

            }
            catch(e){
                console.log('Cannot fetch quotes at the moment!!',e);
                setisLoading(false);
            }

        }

        fetchAllQuotes();

    },[]);

    const quotesList = quotes.map((quote) => {

        return <Quote key={quote._id} author={quote.author}
                        text={quote.text} quoteId={quote._id}/>

    });

    const navigate = useNavigate();
    
    const addQuoteHandler = () => {
        navigate('/new');
    }

    return (

        isLoading ? <div className={styles.wrapper}>
                        <div className={styles.outer}></div>
                        <div className={styles.inner}></div>
                    </div> : (
            quotes.length ? <ul className={styles.quotesList}>
                                {quotesList}
                            </ul> :
                            <div className={styles.noQuotes}>
                                <h1 className={styles.noQuotesHeading}>No quotes found!</h1>
                                <button className={styles.btn} type='button' onClick={addQuoteHandler}>
                                    Add a Quote
                                </button>
                            </div>
        )

    )
}

export default AllQuotes
