import React from "react";

function Inproduction(props)
{
    return(
        <div>
            <h2> Notes for Production Dept. !</h2>

            <p> No. of cars make for today - {props.cars} </p>
            <p> Model - {props.mod} </p>
        </div>
    );
}

export default Inproduction;