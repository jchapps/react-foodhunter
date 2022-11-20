import React from 'react';
import classes from './Checkout.module.css'

function Checkout(props) {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value=""/>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" value=""/>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value=""/>
      </div>
      <div className={classes.control}>
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" value=""/>
      </div>
      <button type='button' onClick={props.onCancel}>Close</button>
      <button>Confirm</button>
    </form>
  );
}

export default Checkout;
