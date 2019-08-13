import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
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
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App;
