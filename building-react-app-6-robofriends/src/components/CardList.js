import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;

/** Building React App 2
1) It should return the Card.
2) Add the 
   i) <div></div> together with the <Card />
   ii) import Card from './Card';
3) 'CardList' receives robots now so we can destructured it and say that 'CardList' have access to 'robots'
4) Loop over the 'robots' and create a card component for each one. 
   i) Create 'cardArrays' variable with 'map' loop.
   ii) Within 'map' loop, each 'robot' will get the data from robots.js.
   iii) 'map' has two parameter user and index. It return a Card component.
   iv) Within the robots[i], we add the index.
   v)  Add the {cardArrays} to the return();
5) In console, there are one warning: 
   Each child in an array or iterator should have a unique "key" prop.
   Solution: This is a special case that you just have to remember. 
   When working with react,the way the virtual DOM works is to keeps track of what all these cards are.
   But without having something called a 'key' prop, if some of these cards get deleted, React won't know which one which and we'll have to change the entire DOM.
   Vs
   if it had a 'key' props that says 'oh this one get removed', i can just remove this from the DOM. 
   So, when you do a loop, it's just something you have to remember. You have to give it a UNIQUE 'key'.
   In our case, we can just say '{i}' which is index.
6) Read the Code:
    return(
        <div>
            {cardArrays}
        </div>
    );

    -Because the {cardArrays} is wrapped in Javascript. We can just copy the entire 'map' loop and paste it inside the {}.

Source Code:
import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;
*/