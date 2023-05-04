import React from "react";
import Banner from "./banner/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../../components/chef";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div>
          <div className="text-center py-10 space-y-6 px-5">
            <h2 className="text-4xl">Most Popular Chefs</h2>
            <p>
              Here is our most popular chinese chefs. they are most experience
              chefs to cooking their recipe. <br /> get start with your chef
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 mb-20 px-5">
          {chefs.map((chef) => (
            <Chef
              key={chef.id}
              chef={chef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
