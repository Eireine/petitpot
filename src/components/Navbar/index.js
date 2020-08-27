import React from 'react'
import styles from './Navbar.module.css'

function renderNavItems(navItems) {
  return navItems.map((item, idx) => (
    <li key={idx} className={`${styles.navItem}`}>
      {item.title}
    </li>
  ))
}

function Navbar(props) {
  return <ul className={styles.navigationBar}>{renderNavItems(props.navItems)}</ul>
}

export default Navbar
