import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Link ,useNavigate} from 'react-router-dom';
const SingnIn =(props) =>{
  
  
  let navigate  = useNavigate();

    const[singnIn, setSingnIn]=useState({
         Mobilenumber:"",
        Password: ""
});
const[record,setRecord]=useState([]);

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setSingnIn({...singnIn, [name]:value});

  }

  const handleClick =(e)=>{
    navigate("/home");

e.preventDefault();
// const newRecord={...singnIn};
  // console(...record,newRecord);
  // setRecord(history.push("/"));
  }

    return(
        <div>
<TextField id="mobile number" name="Mobilenumber" label="Mobile Number" variant="outlined" value={singnIn.Mobilenumber} onChange={handleInput} />
<TextField id="password" name="Password" type="password" label="password" variant="outlined" value={singnIn.Password} onChange={handleInput}/>
<button type="SingnIn" onClick={handleClick}>SingnIn</button>
<p>Allready singnIn</p>
<Link to="/">SingnIn</Link>
 </div>
    );
    }
export default SingnIn;