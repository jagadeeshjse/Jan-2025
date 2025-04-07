import React, { useEffect, useState } from 'react';
import Card from './Card';

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

const MealComponent = () => {
    const [mealData, setMealData] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        console.log(response);
        const { meals } = await response.json();
        setMealData(meals);
    };
    useEffect(() => {
        fetchData(URL);
    }, []);

    console.log(mealData.length);

    return (
        <div className="meal-component">
            {mealData.map((eachMeal) => {
                const { idMeal, strCategory, strArea, strMealThumb, strMeal } = eachMeal;
                return (
                    <Card
                        id={idMeal}
                        category={strCategory}
                        area={strArea}
                        img={strMealThumb}
                        meal={strMeal}
                    />
                );
            })}
        </div>
    );
};

export default MealComponent;
