import React from 'react';

const Card = ({id,name,email}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Card;

/** Building React App 1
1)Instead of doing a class way, for now we're just going to build the function.
2)When writing HTML in react, mean we are writing JSX.
3)https://robohash.org/
4)REMEMBER we need to return one thing, and we can't have multiple elements being returned.
5)Use tachyons to design the card
6)Card need to accept parameters, the parameters is props.
   i) Can set parameters as
      - (props)
        {props.id} {props.name} {props.email}
      - (props)
        const {id,name,email} = props
        {id} {name} {email}
      - ({id, name, email})

Source Code:
import React from 'react';

const Card = ({id,name,email}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
*/