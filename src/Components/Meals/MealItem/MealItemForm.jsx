import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css'

import Input from '../../UI/Input'


function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCheckout(enteredAmountNumber)
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* {!amountIsValid && <p>Please enter an amount 1-10</p>} */}
      <Input label='Amount' ref={amountInputRef} input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        default: '1'
      }}/>
      <button>Add To Cart</button>
    </form>

  );
}

export default MealItemForm;
