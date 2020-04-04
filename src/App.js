import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { ageUp } from "../src/store/AgeReducer/Operations/AgeOperations";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Learning React-Redux class component way.</h2>
          <h4>Age: {this.props.age.count}</h4>
          <div>
            <button onClick={this.props.ageUp}>Increase Age</button>
            <button onClick={this.props.ageDown}>Decrease Age</button>
          </div>
          <br/>
          <h4>Tweets: {this.props.tweet.count}</h4>
          <div>
            <button onClick={this.props.tweetUp}>Increase Tweets</button>
            <button onClick={this.props.tweetDown}>Decrease Tweets</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var data={age: state.Age , tweet: state.Tweets}
  return data;
};

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(ageUp()),
    ageDown: () => dispatch({ type: "AGE_DOWN" }),
    tweetUp: () => dispatch({ type: "TWEET_UP" }),
    tweetDown: () => dispatch({ type: "TWEET_DOWN" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
