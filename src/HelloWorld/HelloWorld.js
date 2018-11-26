import React, { Component } from 'react';
import data from './Data';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = { date: new Date(), value: '' };
  }
  tick(){
    console.log("Ticking");
    this.setState({
      date: new Date(),
    });
  }
  saySomething(something){
    console.log(something)
  }

  //// Lifecycle Methods ////
  componentDidMount(){
    // Runs after the component output hass been rendered
    // to the DOM.
    this.saySomething("Component did mount")
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault();
  }
  ///////////////////////////
  render() {
    const tagList = data.map((name) => <li key={name.name} id={name.name}>{name.name}, {name.money}</li>);
    return (
      <div className="HelloWorld">
        <h1>Hello World!</h1>
        <h2>And a special hello to our richest people:</h2>
        <ul>{tagList}</ul>
        <h2>By the way! The date is currently {this.state.date.toLocaleTimeString()}.</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default HelloWorld;
