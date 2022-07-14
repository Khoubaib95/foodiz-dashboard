import { useState } from "react";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import AddRestaurantForm from "../src/shared/PageComponents/Index/AddRestaurantForm";
import RestaurantCard from "../src/shared/Components/RestaurantCard";
import { InformationCircleIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  const [isAddingRestaurant, setAddingRestaurant] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);

  return (
    <>
      {!isAddingRestaurant ? (
        <div className="h-full">
          {user?.data?.restaurants?.total > 0 ? (
            <div className="w-full p-2 flex flex-col ">
              <div className="flex justify-between mb-2">
                <span>Restaurants</span>
                <button
                  onClick={() => {
                    setAddingRestaurant(true);
                  }}
                  className="w-fit ml-auto px-5 py-2.5 font-medium text-blue-700"
                >
                  Create new restaurant
                </button>
              </div>
              <div className=" flex justify-center flex-wrap">
                {user?.data?.restaurants?.list.map((restaurant: any) => (
                  <div key={restaurant._id}>
                    <RestaurantCard
                      name={restaurant.name}
                      _id={restaurant._id}
                      image={restaurant.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col my-5 mx-auto w-1/2 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
              role="alert"
            >
              <div className="flex justify-center">
                <InformationCircleIcon className="inline flex-shrink-0 mr-3 w-5 h-5" />

                <div className=" text-center">
                  Hello{" "}
                  <span className="font-medium"> {user?.data?.fname},</span>{" "}
                  {"It looks like you don't have Reasutarant yet ?"}
                </div>
              </div>
              <button
                onClick={() => {
                  setAddingRestaurant(true);
                }}
                className="w-fit mx-auto px-5 py-2.5 font-medium text-blue-700"
              >
                Create new restaurant
              </button>
            </div>
          )}
        </div>
      ) : (
        <AddRestaurantForm setAdding={setAddingRestaurant} />
      )}
    </>
  );
};

export default Home;
