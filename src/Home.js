import React, { useEffect ,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {  useNavigate } from 'react-router-dom';
import axios from "axios";
const Home=()=>{
    let navigate=useNavigate();
    const[city,setCity]=useState();
    const[tempData,setTempData]=useState();
    const[search,setSearch]=useState("")
    useEffect(()=>{
        if(search !=""){
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f0fccba4237189e9476b759d2e97df1
`).then((result)=>{
    

        console.log("aaa",result.data.main.temp);
        console.log("aaa",result.data.weather[0].description);

setTempData(result);
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
        <div className="container">
              <h2>Home</h2><br/><br/>

        <TextField id="name" name="Name" label="Enter a data" variant="outlined" value={search.name}  onChange={handleInput} /><br/>
        <button type="button" onClick={handleClick}>search</button><br/><br/>
        

    {/* {data} */}
    {/* njbjubujhbujb */}
    temp-{tempData?.data.main?.temp}
    weather- {tempData?.data.weather[0]?.description}
    
    <button type="button" onClick={handleClick1}>signOut</button><br/>

        </div>
    );
}
export default Home;