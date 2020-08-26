import React from 'react'
import styles from './about.module.css'

function About(props) {

    return (
        <reactFragment>
            <h1 className={styles.title}>{props.title} </h1>
            <div className={styles.about}>
                <img src={props.image} className={styles.img}></img>
                <div className={styles.description}>{props.description} </div>

            </div>
        </reactFragment>

    )
}

export default About
