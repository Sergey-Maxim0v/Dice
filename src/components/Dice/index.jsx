import React from "react";

const Dice = ({diceArray}) => {
  return (
      <div onClick={() => {
        console.log(diceArray)
      }}>Dice</div>
  )
}

export default Dice