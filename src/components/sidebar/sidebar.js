import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { SidebarContainer, sidebar_css, Line, PhotoAndUsernameBox, LogoBox, BoxPhotoAndUsername } from './style';
import { HiOutlineHome } from "react-icons/hi"
import HomeIcon from "../../assets/icons/home.svg"
import ExplorerIcon from "../../assets/icons/globe.svg"
import PerfilIcon from "../../assets/icons/User Icon.svg"
import LogOutIcon from "../../assets/icons/log-out.svg"
import LogoKopili from "../../assets/logo_kopili.svg"
import { ImageUserField } from '../../globalStyle/globalStyle';
import { NavLink } from 'react-router-dom';
import { slide as SidebarMenu } from "react-burger-menu"
import MobileSidebar from './MobileSideBar';
import Thiago from "../../assets/thiago.svg"
import { useLocation } from 'react-router-dom';

const SideNavbar = () => {


    const [isHome, setIsHome] = useState("");
    const [isExplorer, setIsExplorer] = useState("")
    const [isPerfil, setIsPerfil] = useState("")

    const [isOpen, setIsOpen] = useState(true);

    const location = useLocation();

    const disappearTheSidebar = () => {
        let screen_size = window.screen.availWidth;
        if (screen_size < 1000) {
            setIsOpen(false)
        }
    }


    const handleIsHome = () => {
        
        console.log(location)
        if (location.pathname == "/feed") {
            setIsHome("active");
            setIsExplorer("");
            setIsPerfil("");
            console.log(isHome)
        }

    }

    const handleIsExplorer = () => {
       
        if (location.pathname == "/explorer") {
            setIsHome("");
            setIsExplorer("active");
            setIsPerfil("");
        }
    }

    const handleIsPerfil = () => {
        if (location.pathname == "/perfil") {
            setIsHome("");
            setIsExplorer("");
            setIsPerfil("active");
        }
    }

    useEffect(() => {
        handleIsHome();
        handleIsExplorer();
        handleIsPerfil();
        disappearTheSidebar();
    }, [])

    return (
        <>
            {
                isOpen ? (
                    <SidebarContainer>
                        <Sidebar className='sidebar' >
                            <LogoBox>
                                <img className='logo-img' src={LogoKopili} />
                            </LogoBox>
                            <PhotoAndUsernameBox>
                                <BoxPhotoAndUsername height={"100%"}>
                                    <ImageUserField
                                        src={Thiago}
                                        border={"solid 2px black"}
                                        padding={"5px"}
                                        width={"100px"}
                                        height={"100px"} />
                                </BoxPhotoAndUsername >
                                <BoxPhotoAndUsername height={"60%"} >
                                    <h2 className='username'>Chines443</h2>
                                </BoxPhotoAndUsername>
                            </PhotoAndUsernameBox>
                            <Menu className='menu' >

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
                                    prefix={"Perfil"}
                                />
                                <Line />
                                <MenuItem icon={<img src={LogOutIcon} />} className='menu-item' prefix={"Sair"} />
                            </Menu>
                        </Sidebar>
                    </SidebarContainer>
                ) :
                    (
                        <MobileSidebar />
                    )

            }

        </>



    )

}

export default SideNavbar;