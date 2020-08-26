import React from 'react'
import styles from './Navbar.module.css'

function Navbar(props) {
  return <ul className={styles.navigationBar}>{renderNavItems(props.navItems)}</ul>
}

function renderNavItems(navItems) {
  return navItems.map(item => <li className={`${styles.navItem}`}>{item.title}</li>)
}

export default Navbar
