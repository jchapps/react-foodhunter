import React from 'react';
import CheckoutContext from './checkout-context';

function CheckoutProvider(props) {
  const addItemToCOHandler = item => {}
  const removeItemFromCOHandler = ID => {}


  const checkoutContext = {
    items: [],
    amount: 0,
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
