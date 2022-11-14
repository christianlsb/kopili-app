import {Route, Routes } from "react-router-dom";
import SideNavbar from "./components/sidebar/sidebar";
import FeedIntial from "./pages/feed/feed";
import Home from './pages/home/home'
function Navigator() {
  return(
  
  <>
    <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route path={"/feed"} element={<FeedIntial />} />
        <Route path="/explorer" element={<SideNavbar />} />
    </Routes>
  
  
  </>)
}

export default Navigator;
