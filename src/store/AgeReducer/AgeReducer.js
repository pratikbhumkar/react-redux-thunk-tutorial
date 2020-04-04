import Age from "./Models/Age";
import AgeTypes from "./AgeTypes";

const AgeReducer = (state = Age, action) => {
  var newState = { ...state };
  AgeTypes.forEach((element) => {
    if (element.Type===action.type) {
        newState= element.Payload(newState)
    }
  });
  return newState;
};

export default AgeReducer;
