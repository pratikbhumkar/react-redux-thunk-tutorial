import Tweets from "../Models/Tweets";

const DecreaseTweets = (state=Tweets) =>{
    state.count--;
    return state;
}

const IncreaseTweets = (state= Tweets) =>{
    state.count++;
    return state;
}

export {DecreaseTweets, IncreaseTweets};