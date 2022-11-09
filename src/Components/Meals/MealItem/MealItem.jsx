import React, { useContext } from "react";
import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CheckoutContext from "../../../Store/checkout-context";

function MealItem(props) {
  const coCtx = useContext(CheckoutContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCheckoutHandler = (amount) => {
    coCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCheckout={addToCheckoutHandler} />
      </div>
    </li>
  );
}

export default MealItem;
