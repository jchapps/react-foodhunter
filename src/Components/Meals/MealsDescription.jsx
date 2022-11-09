import React from 'react';
import styles from './MealsDescription.module.css'

function MealsDescription() {
  return (
    <section className={styles.summary}>
      <h2>Delicious and fresh!</h2>
      <p>Authentic Japanese cuisine prepared by experienced chefs</p>
      <p>All meals are made with organic produce grown in Japan</p>
    </section>
  );
}

export default MealsDescription
