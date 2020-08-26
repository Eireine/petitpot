import React from 'react'
import Navbar from '../Navbar'
import styles from './Header.module.css'

function Header(props) {
  return (
    <div className={styles.header}>
      <img src={props.logo} className={styles.logo}></img>
      <Navbar navItems={props.navItems} />
    </div>
  )
}

export default Header
