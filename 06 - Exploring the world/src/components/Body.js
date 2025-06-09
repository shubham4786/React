import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5246091&lng=73.8786239&str=all&trackingId=undefined&submitAction=ENTER&queryUniqueId=5c2fa34d-792b-b81b-c061-e512fb623bc8&selectedPLTab=RESTAURANT"
    );

    const jsonData = await data.json();

    setRestaurantList(
      jsonData?.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      jsonData?.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="searchInput"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              setFilteredRestaurant(
                restaurantList.filter((res) =>
                  res.card.card.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filterBtn"
          onClick={() => {
            setFilteredRestaurant(
              restaurantList.filter((res) => res.card.card.info.avgRating > 4)
            );
          }}
        >
          High Rating Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard
            // key={index}
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
