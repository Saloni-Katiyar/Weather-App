import React, { useEffect ,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {  useNavigate } from 'react-router-dom';
import axios from "axios";
const Home=()=>{
    let navigate=useNavigate();
    const[city,setCity]=useState();
    const[data,setData]=useState();
    const[search,setSearch]=useState("")
    useEffect(()=>{
        if(search !=""){
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f0fccba4237189e9476b759d2e97df1
`).then((result)=>{
    
        console.log("aaa",result);
// setData(resp);
    })

    
        }
    },[search]);
    const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
console.log(name,value);
setCity(e.target.value);
    }
    const handleClick =(e)=>{
        e.preventDefault();
    setSearch(city);
        
    }
    const handleClick1=(e)=>{
        e.preventDefault();
     navigate("/SignIn");
    }
    return(
        <>
        
        <TextField id="name" name="Name" label="Enter a data" variant="outlined" value={search.name}  onChange={handleInput} />
        <button type="button" onClick={handleClick}>search</button>
        <button type="button" onClick={handleClick1}>signOut</button>

    {/* {data} */}
    {/* njbjubujhbujb */}
    temp-{data?.main?.temp}
    weather- {data?.weather[0]?.description}
        </>
    );
}
export default Home;