import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filterBtn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.data.avgRating > 4)
            );
          }}
        >
          High Rating Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
