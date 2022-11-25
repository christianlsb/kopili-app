import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import {
  SidebarContainer,
  sidebar_css,
  Line,
  PhotoAndUsernameBox,
  LogoBox,
  BoxPhotoAndUsername,
  LogoffContainer,
} from "./style";
import { HiOutlineHome } from "react-icons/hi";
import HomeIcon from "../../assets/icons/home.svg";
import ExplorerIcon from "../../assets/icons/globe.svg";
import PerfilIcon from "../../assets/icons/User Icon.svg";
import LogOutIcon from "../../assets/icons/log-out.svg";
import LogoKopili from "../../assets/logo_kopili.svg";
import { ImageUserField } from "../../globalStyle/globalStyle";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { slide as SidebarMenu } from "react-burger-menu";
import MobileSidebar from "./MobileSideBar";
import Thiago from "../../assets/thiago.svg";
import { useLocation } from "react-router-dom";
import { FindUserData } from "../../fetch-data/find-user";

const SideNavbar = () => {
  const [isHome, setIsHome] = useState("");
  const [isExplorer, setIsExplorer] = useState("");
  const [isPerfil, setIsPerfil] = useState("");
  const [user_data, setUserData] = useState({});

  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const disappearTheSidebar = () => {
    let screen_size = window.screen.availWidth;
    if (screen_size < 1000) {
      setIsOpen(false);
    }
  };

  const handleIsHome = () => {
    console.log(location);
    if (location.pathname == "/feed") {
      setIsHome("active");
      setIsExplorer("");
      setIsPerfil("");
      console.log(isHome);
    }
  };

  const handleIsExplorer = () => {
    if (location.pathname == "/explorer") {
      setIsHome("");
      setIsExplorer("active");
      setIsPerfil("");
    }
  };

  const handleIsPerfil = () => {
    if (location.pathname == "/perfil") {
      setIsHome("");
      setIsExplorer("");
      setIsPerfil("active");
    }
  };

  const fetchTheUserData = async () => {
    const data = await FindUserData();
    setUserData(data);
  };

  const logOut = () => {
    if(window.confirm("Você deseja sair?")){
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("user_logged")
        navigate("/")
        
    }
  }

    useEffect(() => {
      handleIsHome();
      handleIsExplorer();
      handleIsPerfil();
      disappearTheSidebar();
      fetchTheUserData();
    }, []);

    return (
      <>
        {isOpen ? (
          <SidebarContainer  >
            <Sidebar className="sidebar">
              <LogoBox>
                <img className="logo-img" src={LogoKopili} />
              </LogoBox>
              <PhotoAndUsernameBox>
                <BoxPhotoAndUsername height={"100%"}>
                  <ImageUserField
                    src={user_data.image_url}
                    border={"solid 2px black"}
                    padding={"5px"}
                    width={"100px"}
                    height={"100px"}
                  />
                </BoxPhotoAndUsername>
                <BoxPhotoAndUsername height={"60%"}>
                  <h2 className="username">{user_data.username}</h2>
                </BoxPhotoAndUsername>
              </PhotoAndUsernameBox>
              <Menu className="menu">
                <MenuItem
                  icon={<img src={HomeIcon} />}
                  routerLink={<NavLink to={"/feed"} />}
                  className={`menu-item ${isHome}`}
                  prefix={"Home"}
                />

                <MenuItem
                  routerLink={<NavLink to={"/explorer"} />}
                  icon={<img src={ExplorerIcon} />}
                  className={`menu-item ${isExplorer}`}
                  prefix={"Explorar"}
                />

                <MenuItem
                  routerLink={<NavLink to={"/perfil"} />}
                  icon={<img src={PerfilIcon} />}
                  className={`menu-item ${isPerfil}`}
                  prefix={"Coming Soon"}
                />
                <Line />
                <MenuItem

                  onClick={logOut}
                  icon={<img src={LogOutIcon} />}
                  className="menu-item border-logoff"
                  prefix={"Sair"}
                />
              </Menu>
            </Sidebar>
          </SidebarContainer>
        ) : (
          <MobileSidebar />
        )}
      </>
    );
  };

export default SideNavbar;