import React from 'react';
import styles from './HeaderCheckoutButton.module.css'

import CartIcon from '../Checkout/CheckoutIcon';

function HeaderCheckoutButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span >
        Checkout
      </span>
      <span className={styles.badge}>
        4
      </span>
    </button>
  );
}

export default HeaderCheckoutButton;
