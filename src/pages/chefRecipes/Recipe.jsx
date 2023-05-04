import React from "react";

const Recipe = ({ recipe, img }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={img}
          alt="recipe"
        />
      </figure>
      <div className="card-body space-y-4 justify-between">
        <h2 className="card-title"><span className="text-secondary">Recipe Name:</span> {recipe_name}</h2>
        <div>
          <p className="text-secondary">Ingredients</p>
          {ingredients.map((ingredient) => (
            <li className="mt-2 text-sm">{ingredient}</li>
          ))}
        </div>
        <div>
          <p className="text-secondary">How to Cook</p>
          {cooking_method.map((method) => (
            <li className="mt-2 text-sm">{method}</li>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Add To Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
