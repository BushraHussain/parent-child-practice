import React from 'react' ;


function CarManufacturing (props)
{
    return (
      <div align="center">

        <h1> How many cars lexus has to make today ? </h1>
        <h2> Number of cars - {props.total} </h2>
        <h2> Model - {props.model}</h2>

         </div> 


    );
}

export default CarManufacturing;

