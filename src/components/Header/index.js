import React from 'react'
import Navbar from '../Navbar'
import styles from './Header.module.css'

const Header = ({ logo, navItems }) => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="img-article"></img>
      <Navbar navItems={navItems} />
    </div>
  )
}

export default Header
