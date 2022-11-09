import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Checkout/Cart";
import { useState } from "react";
import CheckoutProvider from "./Store/CheckoutProvider";

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  function showCheckoutHandler() {
    setShowCheckout(true);
  }

  function closeCheckoutHandler() {
    setShowCheckout(false);
  }

  return (
    <>
      <CheckoutProvider>
        <Header onShowCheckout={showCheckoutHandler} />
        {showCheckout && <Cart onCloseCheckout={closeCheckoutHandler} />}
        <main>
          <Meals />
        </main>
      </CheckoutProvider>
    </>
  );
}

export default App;
