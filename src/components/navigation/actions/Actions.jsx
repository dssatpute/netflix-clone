import React from 'react';
import styles from '../actions/actions.module.css'
const Actions = () => {
    return (
        <div className={styles.list} >
            <ul className={styles.list_render} >
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>My List</li>
            </ul>
            
        </div>
    );
}

export default Actions;
