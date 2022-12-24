import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AllReviews from './AllReviews';
import styles from './ShowQuote.module.css'

const ShowQuote = () => {

    const params = useParams();

    const [quote,setquote] = useState({
        author: '',
        text: ''
    });

    const [isLoading, setisLoading] = useState(true);
    
    useEffect(() => {

        async function fetchQuote(){

            try{
                const response = await axios.get(`https://great-quotes.onrender.com/quotes/${params.quoteid}`);
                const { author, text } = response.data;
                setquote({
                    author: author,
                    text: text
                });
                
                setisLoading(false);
                
            }
            catch(e){
                console.log('Cannot fetch the quote at the moment!!',e);
                setisLoading(false);
            }

        }

        fetchQuote();

    },[]);

    const [isDeleting, setisDeleting] = useState(false);

    const navigate  = useNavigate();

    const deleteQuoteHandler = async() => {

        setisDeleting(true);
        await axios.delete(`https://great-quotes.onrender.com/quotes/${params.quoteid}`);

        setisDeleting(false);
        navigate('/');

    }

    return (

            isLoading ? <div className={`${styles.wrapper} ${styles.manipulatedLoader}`}>
                            <div className={styles.outer}></div>
                            <div className={styles.inner}></div>
                        </div> : 
                        <div className={styles.media}>
                            <div className={styles.content}>
                                <p className={styles.quote}>{quote.text}</p>
                                <p className={styles.author}>{quote.author}</p>
                                <div className={styles.btnWrapper}>
                                    <button className={styles.btn} type='button' onClick={deleteQuoteHandler}>
                                        Delete Quote
                                    </button>
                                </div>
                                {
                                    isDeleting ? <div className={styles.blurSheet}>
                                                    <div className={styles.wrapper}>
                                                        <div className={styles.outer}></div>
                                                        <div className={styles.inner}></div>
                                                    </div>
                                                 </div> : 
                                                 <Fragment></Fragment>
                                }
                            </div>
                            <AllReviews quoteId={params.quoteid}/>
                        </div>
                     
          
    )
}

export default ShowQuote
