import { Header } from "../../components/Header";

import styles from './styles.module.scss'

export function Home(){
    return(
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Hello World!</h1>
                    <h1>Teste unitário no React usando Jest</h1>
                </div>
                <div className={styles.group}>
                    <h1>Grupo:</h1>
                    <ul>
                        <li className={styles.textList}>Gabriel</li>
                        <li className={styles.textList}>Rafaela</li>
                        <li className={styles.textList}>Sávio</li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}