import React from 'react'
import styles from './Navbar.module.css'

const renderNavItems = navItems => {
  return navItems.map((item, idx) => (
    <li key={idx} className={`${styles.navItem}`}>
      {item.title}
    </li>
  ))
}

const Navbar = ({ navItems }) => {
  return <ul className={styles.navigationBar}>{renderNavItems(navItems)}</ul>
}

export default Navbar
