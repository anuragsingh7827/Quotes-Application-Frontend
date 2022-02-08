import React, { Fragment, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './NewQuote.module.css';

const NewQuote = () => {

    const authorRef = useRef();
    const quoteRef = useRef();

    const navigate = useNavigate();

    const [isLoading,setisLoading] = useState(false);

    const formSubmitHandler = async(e) => {
        e.preventDefault();

        setisLoading(true);

        try{
            const response = await axios.post('https://frozen-oasis-84637.herokuapp.com/quotes',{
                author: authorRef.current.value,
                text: quoteRef.current.value
            });
            
            setisLoading(false);
            navigate('/');

        }
        catch(e){
            console.log('Cannot add quote at the moment!!');
            setisLoading(false);
        }


    }

    return (
        <div className={styles.media}>
            <form className={styles.quoteForm} onSubmit={formSubmitHandler}>
                <div className={styles.formElements}>
                    <label className={styles.formLabel} htmlFor='author'>Author : </label>
                    <input className={styles.formInput} type="text" id="author" ref={authorRef}/>
                </div>
                <div className={styles.formElements}>
                    <label className={styles.formLabel} htmlFor='quote'>Quote : </label>
                    <textarea className={styles.formInput} rows={7} id="quote" ref={quoteRef}/>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.btn} type='submit'>Add Quote</button>
                </div>   
                {
                    isLoading ? <div className={styles.blurSheet}>
                                    <div className={styles.wrapper}>
                                        <div className={styles.outer}></div>
                                        <div className={styles.inner}></div>
                                    </div>
                                </div> : 
                                <Fragment></Fragment>
                }
            </form>
        </div>
   

    )
}

export default NewQuote
