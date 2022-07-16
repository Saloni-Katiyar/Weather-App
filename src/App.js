import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import  Home from './Home';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp />}/>
        <Route  path="/SignIn" element={<SignIn />}/>
        <Route  path="/home" element={<Home/>}/>
</Routes>
</BrowserRouter>
       
      {/* <SingnUp/> */}
      {/* <SingnIn/> */}
    </div>
    
  );
}

export default App;
