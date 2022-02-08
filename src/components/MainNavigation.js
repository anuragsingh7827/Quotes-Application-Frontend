import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.mainHeading}>Great Quotes</h1>
            <ul className={styles.navList}>
                <li><Link to="/" className={styles.listItems}>All Quotes</Link></li>
                <li><Link to="/new" className={styles.listItems}>Add a quote</Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation
