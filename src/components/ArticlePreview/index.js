import React from 'react'
import styles from './ArticlePreview.module.css'

function ArticlePreview(props) {
    const mainClass = props.isMain ? styles.main : ''
    
    return (
        <div className={styles.basicArticle}>
            <div className={styles.sideLeft}>
                <div className={`${styles.tag} ${mainClass}`}>{props.tag} </div>
                <img src={props.image} className={`${styles.img} ${mainClass}`}></img>
            </div>

            <div className={`${styles.sideRight} ${mainClass}`}>
                <h1 className={`${styles.title} ${mainClass} `}>{props.title}</h1> 
                <div className={`${styles.date} ${mainClass}`}>{props.date}</div>
                <div className={`${styles.description} ${mainClass}`}>{props.description}</div>
                <div className={`${styles.link} ${mainClass}`}><a href={props.link}>Lire l'article</a></div>
            </div>
        </div>
    )
}

export default ArticlePreview


