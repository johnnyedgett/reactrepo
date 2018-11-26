import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld'
import NavBar from './Navbar/Navbar'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {isToggleOn: true}
  //   this.dothis = this.doThis.bind(this)

  //   var todoList = [""];
  //   var tagList = todoList.map((todoObj) => <li key={todoObj}>{todoObj}</li>); 
  // }
  // doThis() {
  //   var obj = "New Item!";
  //   this.todoList.push(obj.toString());
  //   console.log(obj)
  //   this.tagList = this.todoList.map((todoObj) => <li key={todoObj}>{todoObj}</li>);
  // }
  render(){
    
    return (
      <div className="App">
        <NavBar className="Navbar"></NavBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <HelloWorld name="Johnny"></HelloWorld>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          Add new object to todo list:
          <form>
          <input type="text" id="testbox"></input>
          </form>
          <ul>{this.tagList}</ul>
          {/* <button onClick={this.doThis()}>Do that thing</button> */}
        </header>
      </div>
    );
  }
}

export default App;
