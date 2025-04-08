import React, { useEffect, useState } from 'react';
import Card from './Card';

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

const MealComponent = () => {
    const [mealData, setMealData] = useState([]);
    const [searchMeal, setSearchMeal] = useState('');

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            console.log(response);
            const { meals } = await response.json();
            setMealData(meals);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const updatedUrl = `${URL}${searchMeal}`;
        fetchData(updatedUrl);
    }, [searchMeal]);

    const handleSearch = (e) => {
        setSearchMeal(e.target.value);
    };

    const handleDelete = (id) => {
        const updatedMealData = mealData.filter((eachData) => eachData.idMeal !== id)
        setMealData(updatedMealData)
    }

    console.log(searchMeal);

    return (
        <div className="main-container">
            <center className="searchBox">
                <input
                    className="search"
                    type="search"
                    value={searchMeal}
                    onChange={handleSearch}
                />
            </center>
            <hr />
            <div className="meal-component">
                {mealData?.length > 0 ? (
                    mealData?.map((eachMeal) => {
                        const { idMeal, strCategory, strArea, strMealThumb, strMeal } =
                            eachMeal;
                        return (
                            <Card
                                key={idMeal}
                                id={idMeal}
                                category={strCategory}
                                area={strArea}
                                img={strMealThumb}
                                meal={strMeal}
                                handle={() => handleDelete(idMeal)}
                            />
                        );
                    })
                ) : (
                    <h1>Data not found..!</h1>
                )}
            </div>
        </div>
    );
};

export default MealComponent;
