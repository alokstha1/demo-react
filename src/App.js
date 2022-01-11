import React from 'react';
import Cardlist from './components/cards/card-component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');

  }

  componentWillUnmount() {

    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log( 'shouldComponentUpdate', nextProps );
    return this.state.searchField !== nextProps.searchField;
  }


  handleChange = e => {

    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters          = monsters.filter( monster => monster.name.toLowerCase().includes( searchField.toLowerCase() ) );

    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <Searchbox placeholder='search-monster' handlechange={ this.handleChange } />

        <Cardlist monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
