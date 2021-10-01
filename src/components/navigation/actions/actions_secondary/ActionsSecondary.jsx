import React from 'react';
import Bell from './Bell/Bell';
import Search from './Search/Search';
import UserProfile from './User/UserProfile';
import styles from '../actions_secondary/actionssecondary.module.css'

const ActionsSecondary = () => {
    return (
        <div className={styles.secondary}>
            <Search/>
            <Bell/>
            <UserProfile/>
        </div>
    );
}

export default ActionsSecondary;
