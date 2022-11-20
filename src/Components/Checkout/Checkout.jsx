import classes from './Checkout.module.css';
import {useRef, useState} from 'react'



const isEmpty = value => value.trim() === ''
const isSevenChars = value => value.trim().length === 7

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postcode: true,
  })

  const nameInputRef = useRef()
  const postcodeInputRef = useRef()
  const cityInputRef = useRef()
  const streetInputRef = useRef()



  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostcodeIsValid = isSevenChars(enteredPostcode)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postcode: enteredPostcodeIsValid
    })

    const formIsValid =  enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostcodeIsValid

    if (formIsValid) {
      //submit to firebase
    }

  };

  const nameClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
  const streetClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
  const postcodeClasses = `${classes.control} ${formInputsValidity.postcode ? '' : classes.invalid}`
  const cityClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Enter valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Enter valid street name</p>}

      </div>
      <div className={postcodeClasses}>
        <label htmlFor='postal'>Postcode</label>
        <input type='text' id='postal' ref={postcodeInputRef} />
        {!formInputsValidity.postcode && <p>Enter a valid post (length: 7)</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Enter valid city</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
