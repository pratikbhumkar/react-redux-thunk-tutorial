import { combineReducers } from "redux";
import AgeReducer  from "./AgeReducer/AgeReducer";
import TweetsReducer  from "./TweetsReducer/TweetsReducer";

const Reducer= combineReducers({
    Age: AgeReducer,
    Tweets: TweetsReducer
})

export default Reducer;