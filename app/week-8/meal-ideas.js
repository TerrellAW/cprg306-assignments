"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = (ingredient) => {
        setMeals(fetchMealIdeas(ingredient));
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div>
            <h2>
                Meal ideas for {ingredient}
            </h2>
            <ul>
                {meals.map((meal) => (
                    <div>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <li key={meal.idMeal}>
                            {meal.strMeal}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}