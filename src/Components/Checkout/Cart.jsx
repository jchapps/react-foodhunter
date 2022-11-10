import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CheckoutContext from "../../Store/checkout-context";

function Cart(props) {
const checkoutctx = useContext(CheckoutContext)
const totalPrice = `$${checkoutctx.totalAmount.toFixed(2)}`
const hasItems = checkoutctx.items.length > 0

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {checkoutctx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCheckout}>
      {cartItems}
      <div className={styles.total}>
        <span>Total:</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        {hasItems && <button className={styles.button} onClick={props.onCloseCheckout}>
          Order
        </button>}
        <button
          className={styles["button--alt"]}
          onClick={props.onCloseCheckout}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
