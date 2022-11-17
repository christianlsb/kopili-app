import {Route, Routes } from "react-router-dom";
import PostModal from "./components/modal-post/PostModal";
import SideNavbar from "./components/sidebar/sidebar";
import FeedIntial from "./pages/feed/feed";
import Home from './pages/home/home'

import Login from './pages/login/login'
import Register from './pages/register/register'
function Navigator() {
  return(
  
  <>
    <Routes>
        <Route  path={"/"} element={<Home/>} />

        <Route path={"/feed"} element={<FeedIntial />} />
        <Route path="/explorer" element={<SideNavbar />} />
        <Route path="/test-modal" element={<PostModal />} />
    
        <Route path={"/login"} element ={<Login/>} />
        <Route path={"/register"} element ={<Register/>} />
    </Routes>
  
  
  </>)
}

export default Navigator;
