"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div style={{"margin-top": 400}}>
            <h2>
                Meal ideas for {ingredient}
            </h2>
            <ul>
                {Array.isArray(meals) && meals.map((meal) => (
                    <li key={meal.idMeal} className="flex items-center border-2 border-slate-800 bg-slate-950">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 mr-4" />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}