import React from "react";
import styles from "./styles.module.scss"

const Die = ({die, setDiceArray, index, diceArray}) => {
  return (
      <div className={styles.dieRow}>
        <h5 className={styles.dieTitle}>
          {`Die # ${index + 1}`}
        </h5>
        <label>
          <input type={'text'}
                 placeholder={`Die name`}
                 value={die.name}
                 onChange={event => {
                   return setDiceArray([...diceArray])
                 }}
          />
        </label>
        <label>
          <input type={'text'}
                 placeholder={`Fill in dice values separated by commas`}
                 value={die.value}
                 onChange={(event) => {
                   return setDiceArray([...diceArray]);
                 }}
          />
        </label>
      </div>
  )
}

export default Die