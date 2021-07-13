import React from 'react'

const FoodList = ({ food }) => {
    return (
        <div className="card">
            <img src={food["recipe"]["image"]} alt={food["recipe"]["label"]} />
            <div className="content-card">
                <span>{food["recipe"]["cuisineType"]}</span>
                <p>{food["recipe"]["label"]}</p>
            </div>
        </div>
    )
}

export default FoodList
