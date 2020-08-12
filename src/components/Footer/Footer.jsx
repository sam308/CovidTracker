import React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';
import cx from 'classnames';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.tagline}>
                <p>Made with 💕 by Samarpan</p>
            </div>
        
            <div className={styles.link}>
                <a href="https://www.codeforces.com"><FaGithub /></a>
                <div>© Samarpan Chakravarty, 2020.</div>
            </div>
        </div>
    );
}

export default Footer;
