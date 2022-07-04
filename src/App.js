import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SingnUp from './SingnUp';
import SingnIn from './SingnIn';
import  Home from './Home';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SingnUp />}/>
        <Route  path="/SignIn" element={<SingnIn />}/>
        <Route  path="/home" element={<Home/>}/>
</Routes>
</BrowserRouter>
       
      {/* <SingnUp/> */}
      {/* <SingnIn/> */}
    </div>
    
  );
}

export default App;
