import React from "react";
import cn from "classnames";


import styles from "./styles.module.scss"

const Navbar = ({activePage, setActivePage}) => {

  return (
      <div className={styles.nbRow}>
        <div onClick={() => {
          setActivePage('home')
        }}
             className={cn(styles.nbLink, {[styles.nbLinkPage]: activePage === 'home'})}>Home
        </div>
        <div onClick={() => {
          setActivePage('set')
        }}
             className={cn(styles.nbLink, {[styles.nbLinkPage]: activePage === 'set'})}>Set
        </div>
        <div onClick={() => {
          setActivePage('dice')
        }}
             className={cn(styles.nbLink, {[styles.nbLinkPage]: activePage === 'dice'})}>Dice
        </div>
      </div>
  )
}

export default Navbar