import React, {useContext , useEffect, useState} from 'react';
import CheckoutContext from '../../Store/checkout-context';
import styles from './HeaderCheckoutButton.module.css'

import CartIcon from '../Checkout/CheckoutIcon';


function HeaderCheckoutButton(props) {
  const [btnHighlight, setBtnHighlight] = useState(false)

  const cartCtx = useContext(CheckoutContext)

  const itemCount = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  const { items } = cartCtx

  const btnClasses = `${styles.button} ${btnHighlight ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHighlight(true)

    const timer = setTimeout(() => {
      setBtnHighlight(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
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
