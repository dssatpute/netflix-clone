import React from 'react';
import bell from '../../../../../assets/bell.svg'
import styles from '../..//actions_secondary/actionssecondary.module.css'

const Bell = () => {
    return (
        <div >
            <img className={styles.icons} src={bell}></img>
        </div>
    );
}

export default Bell;
