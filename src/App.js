import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:[],
      searchField:""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(user=>this.setState({monster:user}));
  }
  render(){

    const {monster,searchField}=this.state;
    const filterMonsters=monster.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search
        placeholder="search monster" 
        handlechange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
