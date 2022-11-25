import {Route, Routes, redirect, Navigate} from "react-router-dom";
import PostModal from "./components/modal-post/PostModal";
import SideNavbar from "./components/sidebar/sidebar";
import ExplorerPage from "./pages/explorer/explorer";
import FeedIntial from "./pages/feed/feed";
import Home from './pages/home/home'
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { useNavigate } from "react-router-dom";
function Navigator() {

  const navigate = useNavigate();

  return(
  
  <>
    <Routes>

        <Route  path={"/"} element={<Home/>} />
        {
          localStorage.getItem("access_token") != undefined ?
          (
            <>
                <Route path={"/feed"} element={<FeedIntial />} />
                <Route path="/explorer" element={<ExplorerPage />} />
            </>
          ): null
        }
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
    </Routes>
  
  
  </>)
}

export default Navigator;
