import React, { Fragment, useRef, useState } from 'react';
import axios from 'axios';
import styles from './AddReview.module.css';

const AddReview = ({quoteId, addReview}) => {

    const [isLoading, setisLoading] = useState(false);
    const commentRef = useRef();
    const [isDisabled, setisDisabled] = useState(true);

    const commentTextHandler = () => {
        if(commentRef.current.value.trim() === ''){
            setisDisabled(true);
        }else{
            setisDisabled(false);
        }
    }

    const addReviewHandler = async(e) => {

        e.preventDefault();

        setisLoading(true);

        setisDisabled(true);
        
        axios.post(`https://frozen-oasis-84637.herokuapp.com/quotes/${quoteId}/reviews`,{
            comment: commentRef.current.value.trim()
        }).then(() => {
            
            addReview(commentRef.current.value.trim());
            commentRef.current.value = '';
            setisLoading(false);

        }).catch(() => {

            console.log('Cannot add review at the moment!!');
            commentRef.current.value = '';
            setisLoading(false);

        });

    }

    return (
        <div>
            <form className={styles.quoteForm} onSubmit={addReviewHandler}>
                <textarea className={styles.commentBox} rows={8} 
                    ref={commentRef} onChange={commentTextHandler}
                    placeholder='Comment here...'>
                </textarea>
                <button className={`${styles.btn} ${isDisabled ? styles.disabledBtn : styles.enabledBtn}`}
                    type='submit' disabled={isDisabled}>
                        Comment
                </button>
                {
                    isLoading ? <div className={styles.blurSheet}></div> : <Fragment></Fragment>
                }
            </form>
            {
                isLoading ? <div className={styles.wrapper}>
                                <div className={styles.outer}></div>
                                <div className={styles.inner}></div>
                            </div> : <Fragment></Fragment>
            }
        </div>
        

    )
}

export default AddReview
