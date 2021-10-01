import React from 'react';
import search from '../../../../../assets/search.svg'
import styles from '../..//actions_secondary/actionssecondary.module.css'

const Search = () => {
    return (
        <div>
            <img className={styles.icons    } src={search}></img>
        </div>
    );
}

export default Search;
