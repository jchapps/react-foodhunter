import React from "react";
import CheckoutContext from "./checkout-context";
import { useReducer } from "react";

const defaultCheckout = {
  items: [],
  totalAmount: 0,
};

const checkoutReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCheckoutItem = state.items[existingIndex];
    let updatedItems;

    if (existingCheckoutItem) {
      const updatedItem = {
        ...existingCheckoutItem,
        amount: existingCheckoutItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === 'REMOVE') {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCheckoutItem = state.items[existingIndex]
    const updatedTotalAmount = state.totalAmount - existingCheckoutItem.price
    let updatedItems;
    if (existingCheckoutItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }else {
      const updatedItem = {...existingCheckoutItem, amount: existingCheckoutItem.amount - 1}
      updatedItems = [...state.items]
      updatedItems[existingIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCheckout;
};

function CheckoutProvider(props) {
  const [checkoutState, dispatchCheckoutAction] = useReducer(
    checkoutReducer,
    defaultCheckout
  );

  const addItemToCOHandler = (item) => {
    dispatchCheckoutAction({ type: "ADD", item: item });
  };
  const removeItemFromCOHandler = (ID) => {
    dispatchCheckoutAction({ type: "REMOVE", id: ID });
  };

  const checkoutContext = {
    items: checkoutState.items,
    totalAmount: checkoutState.totalAmount,
    addItem: addItemToCOHandler,
    removeItem: removeItemFromCOHandler,
  };

  return (
    <CheckoutContext.Provider value={checkoutContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
