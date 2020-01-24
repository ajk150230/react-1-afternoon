import React, { Component } from 'react';
export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  
  isitPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: 'Indeed' });
    } else {
      this.setState({ palindrome: 'Almost' });
    }
  }

  handleChange(wordcheck) {
    this.setState({ userInput: wordcheck });
  }


  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.isitPalindrome(this.state.userInput)}> Check </button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
      </div>
    )
  }
}