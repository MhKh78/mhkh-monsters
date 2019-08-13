import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // This Way
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // Or This Way
  /*
  state = {
    string: 'Hello Yihua'
  };
   */

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
