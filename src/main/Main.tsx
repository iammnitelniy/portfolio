import styles from './Main.module.css'


export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.text}>
                <span>Hi there</span>
                <h1>Ilia Barabanov</h1>
                <p>Frontend Developer</p>

            </div>
            <div className={styles.photo}>


            </div>
        </div>
    );
};

