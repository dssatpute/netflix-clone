import React from 'react';
import Logo from './logo/logo.jsx';
import Hero from '../Hero/Hero.jsx';
import Actions from './actions/Actions.jsx';
import styles from '../navigation/nav.module.css'
import ActionsSecondary from '../navigation/actions/actions_secondary/ActionsSecondary';


const Navigation = () => {
    return (
       <div className={styles.navigation}>
       <Logo></Logo>
       <Actions></Actions>
       <ActionsSecondary/>
       </div>
    );
}

export default Navigation;
