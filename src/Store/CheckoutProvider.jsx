import React from 'react';
import CheckoutContext from './checkout-context';
import {useReducer} from 'react'

const defaultCheckout = {
  items: [],
  totalAmount: 0
}

const checkoutReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCheckout
}

function CheckoutProvider(props) {
  const [checkoutState, dispatchCheckoutAction] = useReducer(checkoutReducer, defaultCheckout)

  const addItemToCOHandler = item => {
    dispatchCheckoutAction({type: 'ADD', item: item})
  }
  const removeItemFromCOHandler = ID => {
    dispatchCheckoutAction({type: "REMOVE", ID: ID})
  }


  const checkoutContext = {
    items: checkoutState.items,
    totalAmount: checkoutState.totalAmount,
    addItem: addItemToCOHandler,
    removeItem: removeItemFromCOHandler
  }

  return (
    <CheckoutContext.Provider value={checkoutContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
