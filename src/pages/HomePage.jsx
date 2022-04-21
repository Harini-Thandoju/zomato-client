import React, { useEffect } from "react";//whenever u load the home page all the actions inside the restaurant will b performed using useeffect
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// redux actions
import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

function HomePage() {
  const { type } = useParams();
  const dispatch = useDispatch();
  
//whenever u load the home page all the actions inside the restaurant will b performed using useeffect
  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <>
      <div className="my-5">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutri" && <Nutrition />}
      </div>
    </>
  );
}

export default HomePage;