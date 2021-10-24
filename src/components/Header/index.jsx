import {ActiveLink}  from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                        <a href="/">Home</a>
                        <a href="/counter" >Counter</a>
                </nav>

            </div>
        </header>
    );
}