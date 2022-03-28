import React from "react";

import styles from "./styles.module.scss"
import cn from "classnames";

const Footer = () => {
  return (
      <div className={styles.footer}>
        <a className={cn(styles.footerLink, styles.footerLinkGit)}
           href="https://github.com/Sergey-Maxim0v"
           target="_blank"/>
        <a className={cn(styles.footerLink, styles.footerLinkGmail)}
           href="mailto:dev9092336062@gmail.com"
           target="_blank"/>
        <p className={styles.footerSignature}>Sergey Maximov 2022</p>
      </div>
  )
}

export default Footer