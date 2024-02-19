import styles from "./landing.module.css";

const Landing = () => {
    return(
        <div className={styles.landingContainer}>

            <div className={styles.nameContainer}>

                <h1 className={styles.name}>Caleb Bravo</h1>

            </div>

            <h2 className={styles.subTitle}>Full-stack developper</h2>
            
        </div>
    )
}
export default Landing