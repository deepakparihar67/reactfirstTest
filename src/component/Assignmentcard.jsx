import React from "react";
const Acard=({id,name,price,catog,comp})=>{
    return(
        <>
        <div className="card" style={{'width':'300px'}}>
            <div className="card-body">
                <h1 className="card-tital">{name} {price}</h1>
                <h2 className="card-subtital">{catog}</h2>
                <p className="card-text">{comp}</p>
            </div>
        </div>
        </>
    )
}
export default Acard;