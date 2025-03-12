import React, { useEffect, useState } from "react";

import "./RecipeBox.css";
import avatar from '../assets/avatar.png'
import italianTomato from '../assets/italian-tomato.png'
import vegetableAndShrimp from '../assets/vegetable_and_shrimp.png'
import lotusSalad from '../assets/lotus_salad.png'
import snackCake from '../assets/snack_cake.png'
import saladCabbage from '../assets/salad_cabbage.png'
import beanPotatoSalad from '../assets/bean_potato_salad.png'
import sunnyEgg from '../assets/sunny_egg.png'
import lotusSalad2 from '../assets/lotus_salad2.png'


const recipes = [
    { id: 1, name: "Italian-style tomato salad", time: "14 minutes", image: italianTomato },
    { id: 2, name: "Vegetable and shrimp spaghetti", time: "15 minutes", image: vegetableAndShrimp },
    { id: 3, name: "Lotus delight salad", time: "20 minutes", image: lotusSalad },
    { id: 4, name: "Snack cakes", time: "21 minutes", image: snackCake },
    { id: 5, name: "Salad with cabbage and shrimp", time: "32 minutes", image: saladCabbage },
    { id: 6, name: "Bean, shrimp, and potato salad", time: "32 minutes", image: beanPotatoSalad },
    { id: 7, name: "Sunny-side up fried eggs", time: "32 minutes", image: sunnyEgg },
    { id: 8, name: "Lotus delight salad", time: "32 minutes", image: lotusSalad2 },
];



const RecipeBox = () => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('https://67c81e210acf98d07084f02e.mockapi.io/recipes')
            .then((data) => data.json())
            .then((data) => setRecipe(data))
            .catch((error) => console.log(error))

        console.log(recipe);
    }, [])


    return (
        <div className="recipe-box">
            <p>{"Home > Your recipe box"}</p>
            <div className="header">
                <h1 className="user-title">Emma Gonzalez's Recipe Box</h1>
                <div className="user-container">
                    <img className="profile-pic" src={avatar} alt="Profile" />

                    <div className="user-info">
                        <p>
                            Emma Gonzalez is a deputy editor at Cheffly... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, labore voluptatibus voluptatum id consequuntur minus velit officia ipsam unde. Alias magni nemo non facere placeat dignissimos amet corrupti unde. Inventore.
                        </p>
                        <div className="subscribe-container">
                            <p className="subscribe">
                                6.5k Subscribes
                            </p>
                            <button className="share-btn">Share</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs">
                <span className="active">Saved Recipes</span>
                <span>Folders</span>
                <span>Recipes by Genevieve</span>
            </div>

            <div className="recipe-list">
                {recipe?.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <span className="time">{recipe.time}</span>
                        <button className="save-btn">🔖</button>
                    </div>
                ))}

            </div>

            <div className="pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>11</button>
                <button>{">"}</button>
            </div>
        </div>
    );
};


export default RecipeBox;