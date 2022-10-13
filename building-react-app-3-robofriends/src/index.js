import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

/** Building React App 1
1) Reminder: 
  The rule is, 
  When there is a export.default, we can just do
  import Card from './Card'; (export default)

  When there is no default but only export, we must do destructure
  import { robots } from './robots';
2) Want to have multiple card component
3)After we destructure the robots, we can use robots and give props

Source Code:
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';
import Card from './Card';
import { robots } from ./robots;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        //Wrap in a div because want to return just single element.
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  </React.StrictMode>
);
reportWebVitals();

*/

/** Building React App 2
1)import 'CardList' component.
2)Removed the 
    i)<div></div> together with the <Card /> and place it in 'CardList.js' component.
    ii)import Card from './Card';
3)index.js will just render <CardList /> component.
4)We can use the 'robots' now to pass, as robots={robots} array. The 'CardList' is accepting a 'robots' props.

Source Code:
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';
import { robots } from ./robots;
import CardList from './CardList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}/> //Render CardList component
  </React.StrictMode>
);
reportWebVitals();
*/


/**Building React App 3
1)I think now that we're officially building an app, instead of having the 'CardList' component, we should have one big component called
- App.js
this 'App' will be the father of all our children, all our component.
2)Add import App from './App';
3)Removed import CardList from './CardList';
4)Removed <CardList robots={robots} />
5)Removed import {robots} from './robots';
6)Render <App />
*/