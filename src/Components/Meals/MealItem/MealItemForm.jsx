import React from 'react';
import styles from './MealItemForm.module.css'

import Input from '../../UI/Input'

function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input label='Amount' input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        default: '1'
      }}/>
      <button>+</button>
    </form>

  );
}

export default MealItemForm;
