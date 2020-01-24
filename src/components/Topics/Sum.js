import React, { Component } from 'react';
export default class Sum extends Component {
    constructor() {
        super();
    
        this.state = {
          num1: 0,
          num2: 0,
          sum: null
        }
      }
    
      updatenumber1(val) {
        this.setState({ num1: parseInt(val, 10) });
      }
    
      updatenumber2(val) {
        this.setState({ num2: parseInt(val, 10) });
      }
    
      add(num1, num2) {
        this.setState({ sum: num1 + num2 });
      }
    
      render() {
        const { num1, num2, sum } = this.state
        return (
          <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" type="number" onChange={ (e) => this.updatenumber1(e.target.value) }></input>
            <input className="inputLine" type="number" onChange={ (e) => this.updatenumber2(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.add(num1, num2) }> Add </button>
            <span className="resultsBox"> Sum: { sum } </span>
          </div>
        )
      }
    }