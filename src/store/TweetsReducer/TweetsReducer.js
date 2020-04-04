import Tweets from "./Models/Tweets";
import TweetsTypes from "./TweetsTypes";


const TweetsReducer = (state = Tweets, action) => {
    var newState = { ...state };
    TweetsTypes.forEach((element) => {
      if (element.Type===action.type) {
          newState= element.Payload(newState)
      }
    });
    return newState;
  };

export default TweetsReducer;
