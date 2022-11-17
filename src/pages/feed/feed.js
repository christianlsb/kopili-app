import React, { useEffect, useState } from 'react';
import SideNavbar from '../../components/sidebar/sidebar';
import { ButtonSidebar, GlobalContainer, HeaderMobile, ButtonPublish } from '../../globalStyle/globalStyle';
import { Collapse } from 'react-collapse';
import { ButtonDiv, Container, ContainerCards, TestCard } from './style';
import CardPost from '../../components/card-post/CardPost';
import AddIcon from "../../assets/icons/Vector.svg"
import PostModal from '../../components/modal-post/PostModal';


const FeedIntial = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isLessThan1000, setIsLessThan1000] = useState(true)

    const handleIsOpenToFalse = () => {
        setIsOpen(false);
        console.log(isOpen)
    }
    const handleIsOpenToTrue = () => {
        setIsOpen(true);
        console.log(isOpen)
    }

    const disappearTheButtonPublish = () => {
        let screen_size = window.screen.availWidth;
        if (screen_size < 1000) {
            setIsLessThan1000(false)
        }
    }



    useEffect(() => {
        console.log(window.screen.availWidth)
        disappearTheButtonPublish();
    }, [])


    return (
        <>

            <GlobalContainer id={"page-wrap"}  >

                <SideNavbar />
                <Container>
                  
                    <ContainerCards>
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </ContainerCards>

                
                        {
                            isLessThan1000  ? (
                                <ButtonDiv>
                                    <ButtonPublish> <img className='btn_icon' src={AddIcon} /> Publicar</ButtonPublish>
                                </ButtonDiv>
                            
                            ):
                            null
                        }
                         
                   

                </Container>

            </GlobalContainer>
        </>

    )
}

export default FeedIntial;