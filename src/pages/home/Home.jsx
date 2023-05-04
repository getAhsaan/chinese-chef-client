import React from "react";
import Banner from "./banner/Banner";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "../../components/chef";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
  const chefs = useLoaderData();

  const navigation = useNavigation();
  console.log(navigation);

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
          {navigation.state === "loading" ? (
            <div className="flex justify-center items-center w-64 mx-auto text-center col-span-3">
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
            chefs.map((chef) => (
              <Chef
                key={chef.id}
                chef={chef}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
