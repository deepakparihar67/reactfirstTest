import React from "react";
const Card=({lname,duration,details,fee,img})=>{
    return(
        <>
        <div className="card" style={{'width':'300px'}}>
            <img src={img} alt="noimg" />
            <div className="card-body">
                <h1 className="card-tital">{lname} {duration}</h1>
                <h2 className="card-subtital">{fee}</h2>
                <p className="card-text">{details}</p>
            </div>
        </div>
        </>
    )
}
export default Card;