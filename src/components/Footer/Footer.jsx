import React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';


function Footer(props) {
    return (
        <div className={styles.footer}>        
            <div className={styles.link}>
                <a href="https://github.com/sam308/CovidTracker"><FaGithub /></a>
                <div className={styles.copy}>© Samarpan Chakravarty, 2020.</div>
            </div>
        </div>
    );
}



export default Footer;
