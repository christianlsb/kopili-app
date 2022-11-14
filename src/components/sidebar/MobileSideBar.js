import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { SidebarContainer, Line, PhotoAndUsernameBox, LogoBox, BoxPhotoAndUsername, BoxHeaderMobile } from './style';
import HomeIcon from "../../assets/icons/home.svg"
import ExplorerIcon from "../../assets/icons/globe.svg"
import PerfilIcon from "../../assets/icons/User Icon.svg"
import LogOutIcon from "../../assets/icons/log-out.svg"
import LogoKopili from "../../assets/logo_kopili.svg"
import { ButtonPublish, HeaderMobile, ImageUserField } from '../../globalStyle/globalStyle';
import { NavLink } from 'react-router-dom';
import { slide as SidebarMenu } from "react-burger-menu"
import { useState, useEffect } from "react";
import { HiXCircle } from "react-icons/hi"
import Thiago from "../../assets/thiago.svg"
import AddIcon from "../../assets/icons/Vector.svg"
import { useLocation } from "react-router-dom";



const MobileSidebar = () => {

    const [isHome, setIsHome] = useState("");
    const [isExplorer, setIsExplorer] = useState("")
    const [isPerfil, setIsPerfil] = useState("")

    const [isOpen, setIsOpen] = useState(true);
    const [isClose, setIsClose] = useState(false);

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

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleOnClose = (state) => {
        setIsOpen(false)
    }


    useEffect(() => {
        handleIsHome();
        handleIsExplorer();
        handleIsPerfil();
        disappearTheSidebar();
    }, [])


    return (
        <>
            <HeaderMobile>
                <BoxHeaderMobile width={"100%"} display={"initial"}>
                    <SidebarMenu onClose={handleIsOpen} onOpen={handleIsOpen} isOpen={isOpen}>
                        <SidebarContainer>
                            <Sidebar className='sidebar' >
                                <LogoBox>
                                    <img className='logo-img' src={LogoKopili} />
                                    <button className="btn_fechar" onClick={handleOnClose}><HiXCircle size={"50px"} /></button>
                                </LogoBox>
                                <PhotoAndUsernameBox>
                                    <BoxPhotoAndUsername height={"100%"}>
                                        <ImageUserField
                                            src={Thiago}
                                            width={"100px"}
                                            height={"100px"}

                                            min_height_900_width={"150px"}
                                            min_height_900_height={"150px"}


                                        />
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
                    </SidebarMenu>
                </BoxHeaderMobile>
                <BoxHeaderMobile
                    media_500_width={"50%"}
                    width={"30%"}
                    display={"flex"} 
                    media_410_width={"70%"} 
                    >
                    <ButtonPublish margin={"20px"} ><img className='btn_icon' src={AddIcon} />Publicar</ButtonPublish>
                </BoxHeaderMobile>


            </HeaderMobile>

        </>

    )
}

export default MobileSidebar;