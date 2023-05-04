import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { picture, name, experience, number_of_recipes, likes, id } = chef;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-0">{name}</h2>
        <p>
          <small className="text-secondary">Experience: {experience}</small>
        </p>
        <p>
          <small className="text-secondary">Recipes: {number_of_recipes}</small>
        </p>
        <div className="card-actions lg:justify-end items-center">
          <p className="text-xl text-blue-500 flex items-center gap-2">
            Likes: {likes} <AiFillLike />{" "}
          </p>
          <Link to={`/chef/${id}`}>
            <button className="btn btn-primary w-full lg:w-32 mt-4 lg:mt-0">
              View Recipe{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
