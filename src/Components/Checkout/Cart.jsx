import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'

function Cart(props) {
  const cartItems = <ul className={styles['cart-items']}>{[{id: 'c1', name:'suhsi', amount: 2, price:'30'}].map(item => <li>{item.name}</li>)}</ul>




  return (
    <Modal onClose={props.onCloseCheckout}>
      {cartItems}
      <div className={styles.total}>
        <span>Total:</span>
        <span>30</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onCloseCheckout}>Order</button>
        <button className={styles['button--alt']} onClick={props.onCloseCheckout}>Close</button>
      </div>
    </Modal>
  );
}

export default Cart;
