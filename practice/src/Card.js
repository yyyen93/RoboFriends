import React from 'react';

const Card = ({id,name,email}) =>{
    return(
        <div>
            <img alt="roboImg" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;