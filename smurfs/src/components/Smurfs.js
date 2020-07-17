import React, { useContext } from "react";
import {SmurfContext} from "../contexts/SmurfContext";
import Smurf from './Smurf';


export default function Smurfs() {
  const { smurfs } = useContext(SmurfContext);
  console.log("comp", smurfs);
  return (
    <div>
      <div className="smurfApp">
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
}