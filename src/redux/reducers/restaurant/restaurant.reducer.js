import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

//reducers are like switch statements
const initialState = {
  restaurants: [],
  selectedRestaurant: {},
};

// action = {
//   type: "GET_RESTAURANT",
//   payload: [ ...restaurants ](array of obj)
//}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurants: action.payload,
      };
    case GET_SPECIFIC_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;