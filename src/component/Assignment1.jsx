import React,{useState} from "react";
const MobileProduct=()=>{
    let [data,updatedata]=useState({id:'',name:'',price:'',catog:'',comp:''});
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        e.preventDefault(); 
        <div className="card" style={{'width':'300px'}}>
            <div className="card-body">
                <h1 className="card-tital">{e.name} {e.price}</h1>
                <h2 className="card-subtital">{e.catog}</h2>
                <p className="card-text">{e.comp}</p>
            </div>
        </div>
           
        
    }
    return(
        <>
        <form onSubmit={submit}>
            Id      <input type="number" name="id" value={data.id} onChange={change}/><br />
            Name   <input type="text" name="name" value={data.name} onChange={change}/><br />
            Price  <input type="number" name="price" value={data.price} onChange={change} /><br />
            Catogry<input type="text" name="catog" value={data.catog} onChange={change} /><br />
            Company<input type="text" name="comp" value={data.comp}  onChange={change}/><br />
            <button>Add</button>
        </form>
        </>
    )
};
export default MobileProduct;