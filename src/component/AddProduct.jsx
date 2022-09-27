import React,{useState} from "react";
const AddProduct=()=>{
    let [data,updatedata]=useState({name:'',price:'',catog:'',comp:''});
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        e.preventDefault(); 
        console.log(data);
    }
    return(
        <>
        <form onSubmit={submit}>
            Name   <input type="text" name="name" value={data.name} onChange={change}/><br />
            Price  <input type="number" name="price" value={data.price} onChange={change} /><br />
            Catogry<input type="text" name="catog" value={data.catog} onChange={change} /><br />
            Company<input type="text" name="comp" value={data.comp}  onChange={change}/><br />
            <button>Add</button>
        </form>
        </>
    )
};
export default AddProduct;