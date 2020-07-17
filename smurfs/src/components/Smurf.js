import React from 'react';


export default function Smurf(props){
    return(
        <div>
            <h1>name: {props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height:{props.smurf.height}</p>
        </div>
    )
}
