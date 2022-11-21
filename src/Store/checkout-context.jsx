import React from 'react';

const CheckoutContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCheckout: () => {}
})

export default CheckoutContext
