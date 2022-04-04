import React, {useEffect, useState} from "react";
import Die from "../Die";

import styles from "./styles.module.scss"
import cn from "classnames";

const SetDicesTable = ({diceArray, setDiceArray}) => {
  const initialDie = {name: 'One die', value: [1, 2, 3, 4, 5, 6]}

  useEffect(() => {
    if (!diceArray.length) {
      setDiceArray([initialDie])
    }
  }, [])

  return (
      <div className={styles.setDicesRow}>
        <h4 className={styles.setDicesTitle}>Fill in dice names and values</h4>
        <div>
          {diceArray && diceArray.length && diceArray.map((die, index) => {
            return <Die key={index}
                        index={index}
                        die={die}
                        setDiceArray={setDiceArray}
                        diceArray={diceArray}/>
          })}
        </div>
        <div className={styles.setDicesButtonRow}>
          <button className={cn('button', styles.setDicesButton)}
                  onClick={() => setDiceArray([...diceArray, initialDie])}
          >
            Add die
          </button>
        </div>
      </div>
  )
}

export default SetDicesTable