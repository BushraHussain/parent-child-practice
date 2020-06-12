import React from 'react' ;
import Inproduction from './production';


function CarManufacturing (props)
{
    return (
      <div align="center">

        <h1> How many cars lexus has to make today ? </h1>
        <p> Number of cars - {props.total} </p>
        <p> Model - {props.model}</p>
      <Inproduction cars={props.total} mod={props.model} />

         </div> 


    );
}

export default CarManufacturing;

