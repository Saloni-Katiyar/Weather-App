import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
const SignIn =(props) =>{
  
  
  let navigate  = useNavigate();
  const[loginCheck,setLoginCheck]=useState(false);
    const[errorMessage,setErrorMessage]=useState({Mobilenumber:"",Password:""});
    const[signIn, setSignIn]=useState({
         Mobilenumber:"",
        Password: ""
});
const[record,setRecord]=useState([]);

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    if(name=="Mobilenumber" && value==""){
      setErrorMessage({...errorMessage,"Mobilenumber":"Mobilenumber is required"})
    }
    else if(name=="Mobilenumber" && value!="" && value.length>=10){
     setErrorMessage({...errorMessage,"Mobilenumber":""})
    }
    else if (name=="Mobilenumber" && value.length<10) {
     setErrorMessage({...errorMessage,"Mobilenumber":"mobilenumber must be 10 digits"})
 
   } 
  
   else if (name=="Password" && value =="") {
     setErrorMessage({...errorMessage,"Password":"password is required"})
 
   } 
    else if(name=="Password" && value!="" && value.length>=8){
     setErrorMessage({...errorMessage,"Password":""})
    }
    else if (name=="Password" && value.length<8) {
     setErrorMessage({...errorMessage,"Password":"password must be 8 digits"})
 
   } 
    setSignIn({...signIn, [name]:value});

  }

  const handleClick =(e)=>{
    

     if(signIn.Mobilenumber==="") {
      setErrorMessage({...errorMessage,"Mobilenumber":"mobilenumber is required"})

    } else if (signIn.Password==="") {
      setErrorMessage({...errorMessage,"Password":"password is required"})

    } 
    if( signIn.Mobilenumber!="" && signIn.Password!=""  && errorMessage.Mobilenumber=="" && errorMessage.Password==""){
      axios.get(`https://62d259d2d4eb6c69e7e99c6f.mockapi.io/userdata
      `).then((result)=>{
        console.log(result)
        result.data.map((item)=>{
          console.log("aaa",item.Mobilenumber,signIn.Mobilenumber,item.Password,signIn.Password);
          if(item.Mobilenumber==signIn.Mobilenumber && item.Password==signIn.Password){
            setLoginCheck(true);
            navigate("/home");

          }
          
          console.log("aaa",item.Name)
        })
        if(loginCheck){
setLoginCheck(false);
        }
        else{
          setLoginCheck(true);
        }
        
        // console.log(result)
      })
      //navigate("/home");
}
e.preventDefault();
// const newRecord={...signIn};
  // console(...record,newRecord);
  // setRecord(history.push("/"));
  }

    return(
        <div>
<TextField id="mobile number" name="Mobilenumber" label="Mobile Number" variant="outlined" value={signIn.Mobilenumber} onChange={handleInput} helperText={errorMessage.Mobilenumber} error={!!errorMessage.Mobilenumber} />
<TextField id="password" name="Password" type="password" label="password" variant="outlined" value={signIn.Password} onChange={handleInput} helperText={errorMessage.Password} error={!!errorMessage.Password}/>
<button type="SignIn" onClick={handleClick}>SignIn</button>
{loginCheck && <p style={{color:"red"}}>Mobilenumber or password not correct</p>}

<p>Not a user? <Link to="/">SignUp</Link>
</p>

 </div>
    );
    }
export default SignIn;