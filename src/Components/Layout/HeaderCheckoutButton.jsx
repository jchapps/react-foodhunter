import React, {useContext} from 'react';
import CheckoutContext from '../../Store/checkout-context';
import styles from './HeaderCheckoutButton.module.css'

import CartIcon from '../Checkout/CheckoutIcon';


function HeaderCheckoutButton(props) {
  const cartCtx = useContext(CheckoutContext)
  const itemCount = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span >
        Checkout
      </span>
      <span className={styles.badge}>
        {itemCount}
      </span>
    </button>
  );
}

export default HeaderCheckoutButton;
