import {Route, Routes } from "react-router-dom";
import Home from './pages/home/home'
import Login from './pages/login/login'
function Navigator() {
  return(
  
  <>
    <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route path={"/login"} element ={<Login/>} />
    </Routes>
  
  
  </>)
}

export default Navigator;
