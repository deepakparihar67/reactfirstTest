import React from "react";
const Child=()=>{
    return <h1>child component is running..</h1>
}
const Ppoint=()=>{
    return(<>
        <h1>Ppoint component is running..</h1>
        <Alpha/>
        <Beta/>
        </>
    )
}
const Alpha=()=>{
    return <h1>Alpha component is running..</h1>
}
const Beta=()=>{
    return <h1>Beta component is running..</h1>
}
export default Child;
export{Ppoint}