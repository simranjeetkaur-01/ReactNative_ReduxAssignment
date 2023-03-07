import Apple from "../../../assets/Apple.png";
import Orange from "../../../assets/Orange.png";
import Strawberry from "../../../assets/Strawberry.png";
const initialState = {
  items: [
    {
      name: "Apple",
      price: 2.5,
      count: 2,
      id: "01",
      image: Apple
    },
    {
      name: "Orange",
      price: 3,
      count: 4,
      id: "02",
      image: Orange
    },
    {
      name: "Strawberry",
      price: 5.4,
      count: 10,
      id: "03",
      image: Strawberry
    }
  ]
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        items: state.items.map((ele) => {
          if (ele.id === action.payload.id) {
            return {
              ...ele,
              count: ele.count + 1
            };
          } else return ele;
        })
      };

    case "DECREASE":
      return {
        ...state,
        items: state.items.map((ele) => {
          if (ele.id === action.payload.id) {
            return {
              ...ele,
              count: ele.count - 1
            };
          } else return ele;
        })
      };

    case "DELETE":
      return {
        ...state,
        items: state.items.filter((ele) => {
          return ele.id !== action.payload.id;
        })
      };

    default:
      return state;
  }
}

export default cartReducer;
