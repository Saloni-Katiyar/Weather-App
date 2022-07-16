import React,{useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



const  SignUp=(props)=>{
  const[errorMessage,setErrorMessage]=useState({
    Name:"",
    Mobilenumber:"",
    Password:""
  });
  let navigate  = useNavigate();
    const[signUp, setSignUp]=useState({
        Name: "",
        Mobilenumber:"",
       Password: ""
});
const[record,setRecord]=useState([]);
 const handleInput=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
  //  console.log(name,value);
   if(name=="Name" && value!=""){
    setErrorMessage({...errorMessage,"Name":""})

   }
   else if(name=="Name" && value===""){
    setErrorMessage({...errorMessage,"Name":"name is required"})

   }
   else if (name=="Mobilenumber" && value=="") {
    setErrorMessage({...errorMessage,"Mobilenumber":"mobilenumber is required"})

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
 

   setSignUp({...signUp, [name]:value});

 }
 const handleClick = (e) =>{
    // e.preventDefault();
    // const newRecord={...signUp};
      // console(...record,newRecord);
    
      if(signUp.Name===""){
        console.log("aaa",)
        setErrorMessage({...errorMessage,"Name":"name is required"})
      }  
       else if (signUp.Mobilenumber==="") {
        setErrorMessage({...errorMessage,"Mobilenumber":"mobilenumber is required"})

      } 
      else if (signUp.Password==="") {
        setErrorMessage({...errorMessage,"Password":"password is required"})

      } 
      if(signUp.Name!="" && signUp.Mobilenumber!="" && signUp.Password!="" && errorMessage.Name=="" && errorMessage.Mobilenumber=="" && errorMessage.Password==""){
      console.log(signUp);
        axios.post(`https://62d259d2d4eb6c69e7e99c6f.mockapi.io/userdata
`,signUp).then((result)=>{
  console.log(result)
})

    

      navigate("/SignIn");
      }
      }
return(
<div>
<TextField id="name" name="Name" label="name" variant="outlined" value={signUp.Name} onChange={handleInput} helperText={errorMessage.Name} error={!!errorMessage.Name} />

<TextField id="mobile number" name="Mobilenumber" label="Mobile Number" variant="outlined" value={signUp.Mobilenumber} onChange={handleInput}  helperText={errorMessage.Mobilenumber} error={!!errorMessage.Mobilenumber}/>
<TextField id="mobile number" name="Password" type="password" label="Password" variant="outlined" value={signUp.Password} onChange={handleInput} helperText={errorMessage.Password} error={!!errorMessage.Password}/>
<button type="SignUp" onClick={handleClick}>SignUp</button>
<p>Allready a user? <Link to="/SignIn">SignIn</Link>
</p>

</div>
);
}
export default SignUp;