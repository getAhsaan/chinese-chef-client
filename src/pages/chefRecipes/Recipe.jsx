import React, { useState } from "react";
import { toast } from "react-toastify";

const Recipe = ({ recipe, img }) => {
  const [btnDisable, setBtnDisable] = useState(false);

  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  // handle add to favorite
  const handleAddToFavorite = () => {
    setBtnDisable(true);
    toast.success("Successfully add to favorite");
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={img}
          alt="recipe"
        />
      </figure>
      <div className="card-body space-y-4 justify-between">
        <h2 className="card-title">
          <span className="text-secondary">Recipe Name:</span> {recipe_name}
        </h2>
        <div>
          <p className="text-secondary">Ingredients</p>
          {ingredients.map((ingredient, i) => (
            <li
              key={i}
              className="mt-2 text-sm"
            >
              {ingredient}
            </li>
          ))}
        </div>
        <div>
          <p className="text-secondary">How to Cook</p>
          {cooking_method.map((method, i) => (
            <li
              key={i}
              className="mt-2 text-sm"
            >
              {method}
            </li>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button
            disabled={btnDisable}
            onClick={handleAddToFavorite}
            className="btn btn-primary w-full"
          >
            Add To Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
