import React,{Component} from 'react';
import SearchBox from './SearchBox'; //SearchBox Component
import CardList from './CardList'; //CardList Component
import {robots} from './robots'; 

class App extends Component{
  constructor(){
    super()
    //Add 'state' here
    this.state={
      robots:robots,
      searchfield:''
    }
  }

  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value});
  }

  render(){
    const filteredRobos = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return(
      <div className="tc">
        <h2>RoboFriends</h2>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobos} />
      </div>
    );

  }

};
export default App;