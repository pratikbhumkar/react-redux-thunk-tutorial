import {IncreaseTweets,DecreaseTweets} from "./Operations/TweetsOperations";

const TWEET_UP = {Type:"TWEET_UP", Payload: IncreaseTweets};
const TWEET_DOWN= {Type:"TWEET_DOWN", Payload: DecreaseTweets};

const TweetsTypes=[TWEET_UP, TWEET_DOWN];

export default TweetsTypes;