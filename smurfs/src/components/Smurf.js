import React from 'react';
import {CardTitle,CardText} from 'reactstrap';

export default function Smurf(props){
    return(
        <div>
         <CardTitle> <h5>name: {props.smurf.name}</h5> </CardTitle>  
         <CardText> 
            <p>Age: {props.smurf.age}</p>
                <p>Height:{props.smurf.height}</p>
        </CardText> 
          
        </div>
    )
}
