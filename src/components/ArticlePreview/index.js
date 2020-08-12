import React from 'react'
import styles from './ArticlePreview.module.css'

function ArticlePreview(props) {
    return (
        <div className={styles.basicArticle}>
            <div className={styles.sideLeft}>
                <div className={styles.tag}>{props.tag}</div>
                <img src={props.image}></img>
            </div>

            <div className={styles.sideRight}>
                <h1>{props.title}</h1>
                <div className={styles.date}>{props.date}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.link}><a href={props.link}>Lire l'article</a></div>
            </div>
        </div>
    )
}

export default ArticlePreview


