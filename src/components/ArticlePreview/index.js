import React from 'react'
import styles from './ArticlePreview.module.css'

const ArticlePreview = ({ title, image, date, tag, link, description, isMain }) => {
  const mainClass = isMain ? styles.main : ''

  return (
    <div className={styles.basicArticle}>
      <div className={styles.sideLeft}>
        <div className={`${styles.tag} ${mainClass}`}>{tag} </div>
        <img src={image} className={`${styles.img} ${mainClass}`} alt="img-article"></img>
      </div>

      <div className={`${styles.sideRight} ${mainClass}`}>
        <h1 className={`${styles.title} ${mainClass} `}>{title}</h1>
        <div className={`${styles.date} ${mainClass}`}>{date}</div>
        <div className={`${styles.description} ${mainClass}`}>{description}</div>
        <div className={`${styles.link} ${mainClass}`}>
          <a href={link}>Lire l&apos;article</a>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview
