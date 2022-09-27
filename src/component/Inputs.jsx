import React,{useState} from "react";
const Inputs=()=>{
let[n,updatevalue]=useState({n1:0,n2:0,r:0});
function change(e)
{
    updatevalue({...n,[e.target.name]:e.target.value});
}
function Add(e)
{
    updatevalue({...n,r:parseInt(n.n1)+parseInt(n.n2)});
}
return(
    <>
    <h1>Input comonent is running {n.r}</h1>
    <input type="number" name="n1" id="n1" onChange={change} />
    <input type="number" name="n2" id="n2" onChange={change} />
    <button onClick={Add}>Add</button>
    </>
)
};
export default Inputs;