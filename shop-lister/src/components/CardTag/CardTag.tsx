import styles from './CardTag.module.css'


interface CardTag {
    // id?: number,
    // title: string,
    // image: string,
    tag: string,
    image: string,
}

const CardTag = (props: CardTag) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.tagImage} style={{backgroundImage: `url(${props.image})`}}></div>
            <div className={styles.cardNameWrapper}>
                <h3 className={styles.tagName}>{props.tag}</h3>
            </div>
        </div>
    )
}

export default CardTag