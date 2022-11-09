import React from "react";
import styles from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MEALS = [
  {
    id: "m1",
    name: "Sushi Selection",
    description: "Rice and various sea food",
    price: 18.99,
  },
  {
    id: "m2",
    name: "Ramen",
    description: "Noodle and thick broth",
    price: 12,
  },
  {
    id: "m3",
    name: "Soba",
    description: "Freshly prepared buckwheat noodles",
    price: 7,
  },
  {
    id: "m4",
    name: "Yakiniku",
    description: "Grilled meat with a selection of dipping sauces",
    price: 15.25,
  },
];

function AvailableMeals() {
  const mealsList = MEALS.map((meal) => (
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
