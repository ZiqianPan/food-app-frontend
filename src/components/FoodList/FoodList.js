import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import "./FoodList.css";

export default function FoodList({ foodData }) {
  return (
    <div className="FoodList" >
      {foodData.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
