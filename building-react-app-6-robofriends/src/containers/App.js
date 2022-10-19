import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{
  //Add 'state' in react
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  //Lifecycle Mouting | Lifecyle hooks*/
  componentDidMount(){
    /**(1)We fetch whatever the users are. 
     * Cool way to grab the robots list using HTTP REQUEST 'fetch'.
     * fetch is a method on the window.object.
     * fetch is a tool for us to make requests to a server. In this 'https://jsonplaceholder.typicode.com/users' is the server 
     * Question (USERFUL): if you're wondering, what if fetching server was really slow or took 5 second above and we have whole ton of users.
      Answer: Well, in this case you can do something like an IF statement in render(). (THIS IS JUST JAVASCRIPT)
      if robots.length = 0, return an 'h1' that says 'LOADING'
      else return the CardList, SearchBox component
      Code:
      if(this.state.robots.length === 0){
        return <h1>Loading</h1>
      }else{
        return(
          <div className="tc">  
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
          </div>
        );
      };
    */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        return response.json(); 
        /**(2)We're getting a response 
         * Received a response and convert the response into json. 
        */
      })
      .then(user=>{
        this.setState({robots:user});
        /**(3)We're getting the users and updating the users with setState
         * In here, we can say this.setState robots = user
         * robot or user, because in this case we're getting users.
         * If user return to an empty object.It wont receive robots. It will only receive the robots after update with these users.
         */
      })
  };

  //Create function for SearchBox
  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value}); 
  }

  render(){
    /**Destructring */
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });

    return !robots.length ?
       <h1>LOADING</h1> : //LOADING BAR
      (
        <div className="tc">  
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> 
          </Scroll>
        </div>
      )
  };
};
export default App;


/**Building React App 3
1)Add <CardList robots={robots} />  in <div></div>
2)Add import CardList from './CardList';
3)Add import {robots} from './robots';
4)Add <h1>RoboFriends</h1> title
5)Add import SearchBox from './SearchBox';
6)Add <SearchBox /> component
7)Add className="tc" to <div></div>
8)The <SearchBox /> component need to communicate with the <CardList robots={robots}/> component. <CardList /> need to know what is in the <SearchBox /> component, so it can filter out robots accordingly.
9) PLEASE REFER TO 'ONE WAY DATA FLOW REACT' DOCUMENT.
10)Add 'state'
11)convert the pure function App into class.
   - pure function : const App = () => {}
   - class : class App extends Component{}
12)Add shorthand {Component} to react : import React, {Component} from 'react';
13)class always has a render() and return() inside render().
14) How can we add 'state' in react? Ans is do a constructor.
15) In order to use 'this' keyword, we need to call 'super()' which calls the constructor of component.
16) this.state is what describe our app. The props inside the state is something that can change and affect our app. Stage is usually in parent component and the component that is the parent that just passes the ‘state’ to different components.
17)Now, the 'child' component 'CardList' can receives the props from 'state' from the parent(App.js) by using 'this.state.robots'.
18)The way to communicate between CardList and SearchBox. Right now, we had both values. We can create a function for SearchBox called 'onSearchChange()'
19)'onSearchChange(event)' : everytime the input changes, we will get an event parameter. 
    - Pass the function in the <SearchBox /> component, i can say <SearchBox searchChange = {this.onSearchChange}/>.
    - Because class App is an object, we have to use 'this' keyword. And 'onSearchChange()'is 'searchChange'.
    - Pass the searchChange props to SearchBox.js : const SearchBox = ({searchChange}) =>{}
20)Something need to REMEMBER, within the 'event' keyword, there is always have 'event.target.value', which give us the value of the search term.
21)Everytime SearchBox Changes,
    - it’s going to run the onChange function call searchChange.
    - searchChange function is a prop of the ‘onSearchChange’ function that defined in App.js
    - But now that I have the value of the search input, I can now directly communicate that search input to robots list
22)Add const filteredRobots = this.state.robots
    -The robots is an array and how we access 'state' is we going to use 'filter' to filter the array.
    - Give it 'robot', and our array will have to return a condition
        -const filteredRobots = this.state.robots.filter(robot =>{
        return
     })
    - The condition is going to be 
        -return robot.name.toLowerCase() : this is a method that comes with all strings, it just makes everything lowercase.
        (THIS IS GOOD FOR COMPARISONS SO WE DON'T HAVE TO COMPARE CAPITALIZED OR LOWERCASE)
        -And the robots.name which is now lowercased, and includes() the this.searchfield.toLowerCase(), which means if anything in the string includes 'toLowerCase()', then only it return the robots that returns true.
    -Code:
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.searchfield.toLowerCase());
    });
    -EVERYTIME MAKE YOUR OWN METHODS ON A COMPONENT, MAKE SURE USE ARROW FUNCTION SYNTAX. OTHERWISE YOU WILL GET AN ERROR REGARDING TO 'STATE'
23)if the searchfield is not filtering and showing 10 robots in the terminal. its because the 'searchfield' is always an empty string.
    -IN ORDER TO UPDATE THE 'state'
        -AGAIN, ANOTHER RULE OF REACT IS TO DO 
            - 'this.setState' : A method that comes with React.
            - Anytime you want to change 'STATE', you always have to do this. 
            - We are using an object, so 'searchfield' is now going to be 'event.target.value'
            - Code:
            this.setState({searchfield: event.target.value})
            -After set this,it will changed the props 'searchfield' in the state, everything is being filtered and always gets updated.
24)Now, filteredRobots can be used as props instead of 'this.state.robots'
    - Move the variable filteredRobots from onSearchChange function to render()
    - So this allow to access filteredRobots
    Old:
    <CardList robots = {this.state.robots}/>
    New:
    <CardList robots = {filteredRobots}/>
25) CONCLUSION:
We have 'App' component that has two 'state'
    - robots:robots
    - searchfield:''
Because 'App' owns the 'state', any component that has 'state' uses 
  - 'class' syntax
  So they can use the 
  - 'constructor' function to create 'this.state'
  - 'this.state' is what changes in the app, its what describes the app
  -The virtual DOM is just a javascript object. The DOM is just object that collects this entire 'state' and React uses 'this.state' to render and pass them down as props to '<CardList />' and <SearchBox/> components that are just pure functions that can render.
  -We always know that the App is going to look the same, because they're just simple pure functions.
  -We managed the 'state' in the constructor and the App is the only thing that can change this state. But it can pass down things such as props. So we passed down 'onSearchChange' to the 'SearchBox' and the 'SearchBox', everytime there's an 'onChange' on the input, It will let the 'App' know, "Hey, there was a change", "Run the 'onSearchChange' function". It runs the function with the event and updates the 'State' of the 'searchfield' to whatever we type.
  -Now with the information that we have from the 'searchBox', we can now communicate to the 'CardList' and tell it "Hey, i want to filter the 'robots' state to now have only what includes in the 'searchfield'". And instead of passing that 'this.state' to our 'robots', we just passed the 'filteredRobots'
*/


/**Building React App 4
- Smart component
- has 'state' that describe our app. Because have 'state' we called them smart component.
- smart component tend to have class syntax.
- React comes with a few other things inside of Components that we can use are called 'lifecycle' method.
- 'lifecycle' method, if we run these, it will automatically trigger when this App gets loaded on the website. 
-We want to use componentDidMount(), which gets called after render(). 


1) In real life, when we start up this app this.state.robots would actually be an empty array. Because its nothing there, we havent grab the users.
old:
    this.state = {
      robots: robots,
      searchfield: ''
    }
new:
    this.state = {
      robots: [],
      searchfield: ''
    }
2) add componentDidMount(); 
    - 'Lifecycle Mounting | lifecycle hooks'
    -  Because this is part of react,'Notice that i'm not using arrow functions here'
3) Add this.setState({robots:robots}) 
    - When a component does mount, we can set the robots from the javascript file.
    - update the 'state' in componentDidMount(). because we updated the 'state', everytime the state changes, it runs the lifecycle 'updating', and it run render again.
    -So, because it goes from an empty array to a robot's list, render gets re-run, and the virtual DOM notices that there's a difference, and repaints our web browser to include the robots.
4) Removed import {robots} from './robots';
5) Add 'fetch' HTTP request
code:
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(user=>this.setState({robots:user}))

Explanation:
(1) fetch('https://jsonplaceholder.typicode.com/users')
    - We fetch whatever the user are.
    - Cool way to grab the robots list using HTTP REQUEST 'fetch'
    - fetch is a method on the window.object
    - fetch is a tool for us to make requests to a server. In this 'https://jsonplaceholder.typicode.com/users' is the server
    - Question (USERFUL): if you're wondering, what if fetching server was really slow or took 5 second above and we have whole ton of users.
      Answer: Well, in this case you can do something like an IF statement in render(). (THIS IS JUST JAVASCRIPT)
      if robots.length = 0, return an 'h1' that says 'LOADING'
      else return the CardList, SearchBox component
      Code:
      if(this.state.robots.length === 0){
        return <h1>Loading</h1> //LOADING BAR
      }else{
        return(
          <div className="tc">  
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
          </div>
        );
      };
(2) .then(response=>response.json())
    - We're getting a response
    - Received a response and convert the response into json
(3) .then(user=>this.setState({robots:user}))
    - We're getting the users and updating the users with setState
    - In here, we can say this.setState robots = user
    - robot or user, because in this case we're getting users.
    - If user return to an empty object. It wont receive robots. It will only receive the robots after update with these users.
*/

/** Building React App 5
1) Add import Scroll from 'Scroll'
2) Create a 'Scroll' Components that wraps the 'CardList' Component.
    - 'CardList' will completely scrollable.
    - Anytime need a scroll, can just use this Scroll component and wrap around.
 */


/**Bulding React App 6
1) There is an easy way to write this line of codes
    - robots.length is is consider false
        - So, we want the opposite
            - (robots.length) is 0 false
            - (!robots.length) is 1 true
    -Which means 
        - Its 'true'  If server response slow and no robots, it will return LOADING
        - Its 'false If server get robots and it will return the components.
            !robots.length means true
            robots.length means false
2) Make this code into ternary:
Code: 
    if(!robots.length){
      return <h1>LOADING</h1> //LOADING BAR
    }else{
      return(
        <div className="tc">  
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> 
          </Scroll>
        </div>
      )

Ternary Code:
return !robots.length ?
       <h1>LOADING</h1> : //LOADING BAR
      (
        <div className="tc">  
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> 
          </Scroll>
        </div>
      )

 */