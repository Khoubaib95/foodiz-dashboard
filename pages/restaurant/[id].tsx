import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getRestaurantApi } from "../../src/api/restaurant/restaurant.api";

const Restaurant: NextPage = () => {
  const [restaurant, setRestaurant] = useState<any>(null);
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    const id: string = query.id as string;
    (async () => {
      console.log("Restaurant");
      const { data } = await getRestaurantApi(
        `id/${id}?attributes=name image cover description`
      );
      console.log(data.data);
      setRestaurant(data.data);
    })();
  }, [isReady, query.id]);

  return (
    <div>
      <h1 className="text-purple-900 text-lg my-3">
        {restaurant ? restaurant.name : ""}
      </h1>
      <div
        className="flex flex-col justify-end p-6 h-96 rounded-md object-contain object-center bg-cover"
        style={{
          backgroundImage: `url(${restaurant ? restaurant.cover : ""})`,
        }}
      >
        <div
          className="bg-white flex justify-end items-end h-32 w-32 rounded-full ring-4 ring-white object-contain object-center bg-cover"
          style={{
            backgroundImage: `url(${restaurant ? restaurant?.image : ""})`,
          }}
        ></div>
      </div>
      <p className="mt-3 text-lg">About us.</p>
      <div className="my-2 mx-3 max-w-2lg text-lg">
        {restaurant?.description}
      </div>
    </div>
  );
};

export default Restaurant;
