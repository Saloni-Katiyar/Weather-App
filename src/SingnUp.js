import React,{useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from 'react-router-dom';
// import {useHistory } from 'react-router-dom';

const  SingnUp=(props)=>{
  
  let navigate  = useNavigate();
    const[singnUp, setSingnUp]=useState({
        Name: "",
        Mobilenumber:"",
       Password: ""
});
const[record,setRecord]=useState([]);
 const handleInput=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   console.log(name,value);
   setSingnUp({...singnUp, [name]:value});

 }
 const handleClick =(e)=>{
    // e.preventDefault();
    // const newRecord={...singnUp};
      // console(...record,newRecord);
      navigate("/SignIn");
      }
return(
<div>
<TextField id="name" name="Name" label="name" variant="outlined" value={singnUp.Name} onChange={handleInput} />
<TextField id="mobile number" name="Mobilenumber" type="password" label="Mobile Number" variant="outlined" value={singnUp.Mobilenumber} onChange={handleInput}/>
<TextField id="mobile number" name="Password" label="Password" variant="outlined" value={singnUp.Password} onChange={handleInput}/>
<button type="SingnUp" onClick={handleClick}>SingnUp</button>
<p>Do not singnIn</p>
<Link to="/SignIn">SingnUp</Link>
</div>
);
}
export default SingnUp;