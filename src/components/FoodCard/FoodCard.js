import React from "react";
import "./FoodCard.css";

export default function FoodCard({ food }) {
  const { id, name, price, image, toppings, shortDescription } = food;
  
  return (
    <div className="FoodCard" key={id}>
      <h1>{name}</h1>
      <span className="FoodCar__shortDescriptions">{shortDescription}</span>
      <img src={image} alt={name} />
      <div className="FoodCard__price">
        <span>
          <strong>Price</strong>: ${price.toFixed(2)}
        </span>
      </div>
      <div className="FoodCard__toppings">
        <span>
          <strong>Toppings</strong>:{" "}
          {toppings.length !== 0
            ? toppings.map((topping, index) => (
                <span key={index}>
                  {/* adds comma before the toppings if its NOT zero */}
                  {`${(index ? ", " : "") + topping}`}
                </span>
              ))
            : "No toppings"}
        </span>
      </div>
    </div>
  );
}
