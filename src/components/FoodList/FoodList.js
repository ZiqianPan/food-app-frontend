import React, { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import "./FoodList.css";

export default function FoodList({ foodData }) {
  const [searchInput, setSearchInput] = useState("");

  let dataToDisplay = foodData;

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  if (searchInput) {
    dataToDisplay = foodData.filter((food) => {
      const { name } = food;
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    if (dataToDisplay.length === 0) {
      return <div className="FoodList__noResult">No results for:{searchInput}</div>;
    } else {
      return (
        <div className="FoodList__content">
          {dataToDisplay.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="FoodList">
      <div className="FoodList__search">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
      {renderContent()}
    </div>
  );
}
