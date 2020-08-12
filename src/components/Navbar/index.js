import React from 'react'
import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <React.Fragment>
            <div className={styles.logo}></div>
            <Navbar className={styles.navigation}>{props.navigation}
                <Nav.Link href="#home">Home</Nav.Link> {/* todo : props*/}
                <Nav.Link href="#link">Link</Nav.Link> {/* todo : props*/}
            </Navbar>
        </React.Fragment> 
    )

export default Navbar {/* todo : rechercher pourquoi c'est en erreur*/}