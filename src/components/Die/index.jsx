import React, {useCallback} from "react";
import styles from "./styles.module.scss"

const Die = ({die, setDiceArray, index, diceArray}) => {

  const handleNameInput = useCallback(
      (event) => {
        const userDie = {name: die.name.slice(), value: die.value.slice()}
        const userDiceArray = diceArray.slice();

        userDiceArray[index] = {...userDie, name: event.target.value}

        return setDiceArray(userDiceArray);
      },
      [die, diceArray, setDiceArray, index]
  );

  const handleValueInput = useCallback(
      (event) => {
        const userDie = {name: die.name.slice(), value: die.value.slice()}
        const userDiceArray = diceArray.slice();
        const userValueArray = die.value.slice();
        //TODO: функция изменения элемента массива

        userDiceArray[index] = {...userDie, value: userValueArray}

        return setDiceArray(userDiceArray);
      }, [die, diceArray, setDiceArray, index]
  )
  console.log(diceArray)
  return (
      <div className={styles.dieRow}>
        <h5 className={styles.dieTitle}>
          {`Die # ${index + 1}`}
        </h5>
        <input className={styles.dieNameInput}
               type={'text'}
               placeholder={`Die name`}
               value={die.name}
               onChange={event => handleNameInput(event)}
        />
        <div className={styles.dieDelimiter}>{`: `}</div>
        <label>
          {die.value.map((el, i) => {
            return <input key={i}
                          className={styles.dieValueInput}
                          value={el}
                          onChange={event => event}
            />
          })}
        </label>
      </div>
  )
}

export default Die