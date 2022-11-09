import React from 'react';
import banner from '../../Assets/gohan_banner.jpeg'
import HeaderCheckoutButton from './HeaderCheckoutButton'

import styles from './Header.module.css'

function Header(props) {

  return (
    <>
      <header className={styles.header}>
        <h1>Gohan Hunter</h1>
        <HeaderCheckoutButton onClick={props.onShowCheckout} />
      </header>
      <div className={styles['main-image']}>
        <img src={banner} alt='food banner'/>
      </div>
    </>
  );
}

export default Header;
