import React, {useCallback} from "react";
import styles from "./styles.module.scss"

const Die = ({die, setDiceArray, index, diceArray}) => {

  const handleInput = useCallback(
      (event, input) => {
        const userDie = {name: die.name.slice(), value: die.value.slice()}
        const userDiceArray = diceArray.slice();

        if (input === 'name') {
          userDiceArray[index] = {...userDie, name: event.target.value}
        }

        if (input === 'value') {
          userDiceArray[index] = {...userDie, value: event.target.value.split(',')}
        }
        console.log(userDiceArray)

        return setDiceArray(userDiceArray);
      },
      [die, diceArray, setDiceArray, index]
  );

  return (
      <div className={styles.dieRow}>
        <h5 className={styles.dieTitle}>
          {`Die # ${index + 1}`}
        </h5>
        <input type={'text'}
               placeholder={`Die name`}
               value={die.name}
               onChange={event => handleInput(event, 'name')}
        />
        <label>
          <input type={'text'}
                 placeholder={`Fill in dice values separated by commas`}
                 value={die.value}
                 onChange={event => handleInput(event, 'value')}
          />
        </label>
      </div>
  )
}

export default Die