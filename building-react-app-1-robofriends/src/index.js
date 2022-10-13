import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';
import Card from './Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
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
*/
