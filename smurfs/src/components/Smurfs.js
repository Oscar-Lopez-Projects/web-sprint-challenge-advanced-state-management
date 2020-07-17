import React, { useContext } from "react";
import {SmurfContext} from "../contexts/SmurfContext";
import Smurf from './Smurf';
import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'

export default function Smurfs() {
  const { smurfs } = useContext(SmurfContext);
  console.log("comp", smurfs);
  return (
    <div>
      <div className="smurfApp">

        {smurfs.map(smurf => (
          <Card>
            <CardBody>
          <Smurf key={smurf.id} smurf={smurf} />
          </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}