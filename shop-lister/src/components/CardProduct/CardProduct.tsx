import styles from './CardProduct.module.css'

const CardProduct = () => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.tagImage}></div>
            <div className={styles.cardNameWrapper}>
                <h3 className={styles.tagName}>Tag Name</h3>
            </div>
        </div>
    )
}

export default CardProduct