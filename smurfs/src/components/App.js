import React, { Component, useEffect, useState } from "react";
import "./App.css";
import {SmurfContext} from '../contexts/SmurfContext';
import axios from 'axios';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
function App () {

    const [smurfs, setSmurfs]= useState([]);


    useEffect(()=>{
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res =>{
              console.log('this is info: ', res.data);
              setSmurfs(res.data)
            })
            .catch(err=> console.log('err is: ....', err))

    },[])

    const addSmurf = smurf => {
      axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
          console.log('post res', res);
          setSmurfs(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    };

    return (
      <div className="App">

        <SmurfContext.Provider value={{smurfs}}> 
             <h1>SMURFS! 2.0 W/ Context API</h1>
                <Smurfs />
                <AddSmurf addSmurf={addSmurf}/>
        </SmurfContext.Provider>


      </div>

    );
  }


export default App;
