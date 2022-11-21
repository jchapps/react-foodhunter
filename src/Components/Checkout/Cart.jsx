import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CheckoutContext from "../../Store/checkout-context";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const checkoutctx = useContext(CheckoutContext);
  const totalPrice = `$${checkoutctx.totalAmount.toFixed(2)}`;
  const hasItems = checkoutctx.items.length > 0;

  function checkoutItemRemoveHandler(id) {
    checkoutctx.removeItem(id);
  }

  function checkoutItemAddHandler(item) {
    checkoutctx.addItem({ ...item, amount: 1 });
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://customhook-b3ed4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: checkoutctx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {checkoutctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={checkoutItemRemoveHandler.bind(null, item.id)}
          onAdd={checkoutItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  const modalButtons = (
    <div className={styles.actions}>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
      <button className={styles["button--alt"]} onClick={props.onCloseCheckout}>
        Close
      </button>
    </div>
  );
  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total:</span>
        <span>{totalPrice}</span>
      </div>
      {isCheckingOut && (
        <Checkout
          onSubmit={submitOrderHandler}
          onCancel={props.onCloseCheckout}
        />
      )}
      {!isCheckingOut && modalButtons}
    </>
  );

  const isSubmittingModal = <p>Processing order 🚚</p>;

  const didSubmitModalContent = (
    <>
      <p>Order processed ✅</p>{" "}
      <div className={styles.actions}>
      <button className={styles.button} onClick={props.onCloseCheckout}>
        Close
      </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onCloseCheckout}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModal}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
