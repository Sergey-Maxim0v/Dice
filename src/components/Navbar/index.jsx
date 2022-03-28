import React from "react";
import cn from "classnames";


import styles from "./styles.module.scss"

const Navbar = () => {

  return (
      <div className={styles.nbRow}>
        <div className={cn(styles.nbLinkPage)}>Home</div>
        <div>Set</div>
        <div>Dice</div>
      </div>
  )
}

export default Navbar