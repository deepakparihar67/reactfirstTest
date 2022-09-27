import React from "react";
const Lang=({lname,duration,details,fee,img})=>{
    return(
        <>
        <h1>Langauge Name :{lname}</h1>
        <h2>Duration :{duration}</h2>
        <h4>Details :{details}</h4>
        <h3>Fee :{fee}</h3>
        <img src={img} alt="noimg" />
        <hr/>
        </>
    )
}
export default Lang;