import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([])
  useEffect( () => {
    const fetchMeals = async() => {
      const response = await fetch("https://customhook-b3ed4-default-rtdb.firebaseio.com/Meals.json");
      const responseData = await response.json();

       const loadedMeals = []

       for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
       }
       setMeals(loadedMeals)
      }
      fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
}

export default AvailableMeals;
