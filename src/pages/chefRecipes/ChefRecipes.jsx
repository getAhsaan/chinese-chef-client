import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Recipe from "./Recipe";
import { CirclesWithBar } from "react-loader-spinner";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const {
    picture,
    name,
    experience,
    number_of_recipes,
    likes,
    id,
    bio,
    recipes,
  } = chef;

  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center w-64 mx-auto text-center my-10">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      ) : (
        <>
          <div>
            <div className="text-center py-10 space-y-6 px-5">
              <h2 className="text-4xl">{name} Details and Recipes</h2>
              <p>
                Here is our most popular chinese chefs. they are most experience
                chefs to cooking their recipe. <br /> get start with your chef
              </p>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
            <div className="card-body lg:w-1/2">
              <h2 className="card-title text-2xl">{name}</h2>
              <p> {bio} </p>
              <div className="card-actions flex-col">
                <p className="text-secondary"> Experience: {experience}</p>
                <p className="text-secondary"> Recipe: {number_of_recipes}</p>
                <p className="text-secondary"> Likes: {likes}</p>
              </div>
            </div>
            <figure className="lg:w-1/2">
              <img
                src={picture}
                alt={name}
              />
            </figure>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-20 container mx-auto">
            {recipes.map((recipe, i) => (
              <Recipe
                key={i}
                recipe={recipe}
                img={picture}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ChefRecipes;
