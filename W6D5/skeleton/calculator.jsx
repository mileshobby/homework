import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  // your code here
  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }

  setNum2(e){
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2});
  }

  multiply(e){
    e.preventDefault();
    const result = this.state.num1*this.state.num2;
    this.setState({result});
  }

  divide(e){
    e.preventDefault();
    const result = this.state.num1/this.state.num2;
    this.setState({result});
  }

  add(e){
    e.preventDefault();
    const result = this.state.num1+this.state.num2;
    this.setState({result});
  }

  subtract(e){
    e.preventDefault();
    const result = this.state.num1-this.state.num2;
    this.setState({result});
  }

  resetState(e){
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
  }

  render() {
    const {num1, num2, result} = this.state;
    return (
      <div>
        <input type="text" onChange={this.setNum1} value={num1}/>
        <input type="text" onChange={this.setNum2} value={num2}/>
        <br/>
        <button onClick={this.add} > + </button>
        <button onClick={this.subtract}> - </button>
        <button onClick={this.multiply}> * </button>
        <button onClick={this.divide}> / </button>
        <button onClick={this.resetState}> Reset </button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
