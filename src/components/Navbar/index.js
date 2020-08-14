import React from 'react'
import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <div className={styles.navigationBar}>
            <ul>{renderNavItems(props.navItems)}</ul>
        </div>
    );
}

function renderNavItems(navItems) {
    return navItems.map((item) => 
        <li className={`${styles.navItems}`}>{item.title}</li>
    );
}

export default Navbar