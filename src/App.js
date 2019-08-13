import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  // This Way
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
  searchField = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <input
            type='search'
            placeholder='search monsters'
            onChange={e => this.searchField(e)}
          />
          <h1>{this.state.searchField}</h1>
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App;
