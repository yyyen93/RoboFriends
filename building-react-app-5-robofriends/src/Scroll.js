import React from 'react'

const Scroll = (props) =>{
    return(
        /**
         * (1)Using style like HTML
         * Using this style attribute and JSX, able add styles with using double curly bracket. 
         * Syntax : {{}}
         * This is a javascript expression, within this i'm returning an object and this object can have CSS style.
         * You must camelCase for JSX
            - CSS : overflow-y
            - JSX : overflowY
         *  */
        
        <div style={{overflowY: 'scroll', border:'1px solid black', height:'800px'}}>
            {props.children}
        </div>

    )
}
export default Scroll;

/**Building React App 5
- Make the site responsive
- Make search box at the top and have a scroll that can search through the robots list.
- React is so good that able to create a usable components with functionality.
- Create a 'Scroll Component' wraps the 'CardList' component
-  Scroll is not a self closing. It Wraps component.
- The entire App is described two things. The 'robots' and 'searchfield'. React takes care the rest. As soon as 'searchfield' or 'robots' changes, React triggered down. All this information as 'props' to all these component and magically creates our view for us.

1) Scroll is not a self closing. it wraps component.
2) Scroll can use 'children' to render <CardList/>
3) Question: How can we tell 'Scroll' to render whatever inside of <Scroll></Scroll>
    Answer:
    React has
    1)Props
    2)State
    3)Children : 
    - In this case, this 'children' is refering to <CardList />
        Code: 
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
    - Every single component in React has 'children' property.
    - Well,Every 'props' object has children.
        Example 1:
        const Scroll = (props) => {
            return props.children : this wil show 'robots' list
        }
        Example 2:
        const Scroll = (props) =>{
            return <h1>hi</h1> : this wil show 'hi' h1 tag in the page.
        }
    - So, using  'props.children', we can create Component that wrap other Component
4)(TAKE ATTENTION)
   - We can only able to wrap thse 'lower case component' which is like HTML tags
   - BUT EVERYTIME WE HAD A CUSTOM COMPONENT WITHH A CAPITAL LETTER such as
        <Searchbox/>
        <CardList/>
        We couldnt really wrapped it.
5) Source Code:
import React from 'react'
const Scroll = (props) =>{
    return(
    <div style={{overflowY: 'scroll', border:'1px solid black', height:'800px'}}>
        {props.children}
     </div>
    )
}
6) Using style like HTML
    - Using this 'style' attribute and JSX, able add style with using double curly bracket {{}}
    - Syntax: {{}}
    - This is a javascript expression, within this i'm returning an object and this object can have CSS style.
    - You must camelCase for JSX.
        - CSS: overflow-y
        - JSX : overflowY

 */