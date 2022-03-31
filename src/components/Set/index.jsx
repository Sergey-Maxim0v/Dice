import React from "react";
import cn from "classnames";

import SetDicesTable from "../SetDicesTable";

import styles from "./styles.module.scss"


const Set = ({diceArray, setDiceArray, setActivePage}) => {
  return (
      <div className={styles.setRow}>
        <h1 className={styles.setTitle}>Change your dice</h1>
        <SetDicesTable/>
        <div className={styles.setButtonRow}>
          <div className={cn('button')}
               onClick={() => {
            setActivePage('dice')
          }}
          >
            Roll your dice
          </div>
        </div>
      </div>
  )
}

export default Set