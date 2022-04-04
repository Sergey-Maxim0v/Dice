import React from "react";

import styles from "./styles.module.scss"
import cn from "classnames";

const Home = ({setDiceArray, setActivePage}) => {


  return (
      <main className={'contentContainer'}>
        <h1 className={styles.hTitle}>Customizable dice</h1>

        <div className={styles.hButtonsRow}>
          <div onClick={() => {
            setActivePage('set')
          }} className={cn('button')}>Adjust dice
          </div>
        </div>
        <div className={styles.hButtonsRow}>
          <div onClick={() => {
            setDiceArray([
              {name: 'One die', value: [1, 2, 3, 4, 5, 6]}
            ])
            setActivePage('dice')
          }} className={cn('button')}>Roll one die
          </div>
          <div onClick={() => {
            setDiceArray([
              {name: 'First die', value: [1, 2, 3, 4, 5, 6]},
              {name: 'Second die', value: [1, 2, 3, 4, 5, 6]}
            ])
            setActivePage('dice')
          }} className={cn('button')}>Roll two dice
          </div>
          <div onClick={() => {
            setDiceArray([
              {name: 'First die', value: [1, 2, 3, 4, 5, 6]},
              {name: 'Second die', value: [1, 2, 3, 4, 5, 6]},
              {name: 'Third die', value: [1, 2, 3, 4, 5, 6]},
              {name: 'Fourth die', value: [1, 2, 3, 4, 5, 6]}
            ])
            setActivePage('dice')
          }} className={cn('button')}>Roll four dice
          </div>
        </div>
      </main>
  )
}

export default Home