import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div class="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
};
export default SearchBox;


/**Building React App 3
1)function that returns an input.
2)Add <input type="search" placeholder="Search Robots" />
3)Is always a good idea incase to add more things to the search box, is to wrap everything in a '<div></div>'.
4)Add className="pa2" to <div></div>
5)Add className="pa3 ba b--green bg-lightest-blue" to <input />
6)Add {searchChange} props from App.js in searchBox.js : 
    - const SearchBox = ({searchChange}) =>{}
7)Remember in HTML, i can do 'onchange html' event, which listening to 'input changes'.
*/