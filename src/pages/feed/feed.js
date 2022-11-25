import React, { useEffect, useState } from 'react';
import SideNavbar from '../../components/sidebar/sidebar';
import { ButtonSidebar, GlobalContainer, HeaderMobile, ButtonPublish } from '../../globalStyle/globalStyle';
import { Collapse } from 'react-collapse';
import { ButtonDiv, Container, ContainerCards, TestCard } from './style';
import CardPost from '../../components/card-post/CardPost';
import AddIcon from "../../assets/icons/Vector.svg"
import PostModal from '../../components/modal-post/PostModal';

import  FetchTheFeedData from '../../fetch-data/feed-post';
import { SyncLoader } from 'react-spinners';


const FeedIntial = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isLessThan1000, setIsLessThan1000] = useState(true)
    const [openPublishModal, setOpenPublishModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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

   const handleOpenPublishModal = ()=>{
        setOpenPublishModal(true)
   }
   const handleOpenPublishModalToFalse = ()=>{
    setOpenPublishModal(false)
}



    const fetchTheFeedData = async ()=>{
        const data = await FetchTheFeedData();
        console.log(data);
        setLoading(false);
        setPosts(data);
       
    }

   


    useEffect(() => {
        console.log(window.screen.availWidth)
        disappearTheButtonPublish();
        fetchTheFeedData();
        // console.log(data);
    }, [])


    return (
        <>
            
            <GlobalContainer id={"page-wrap"}  >

                <SideNavbar />
                <Container>
                  
                    <ContainerCards>
                        {
                            loading ? <SyncLoader color='blue' /> : null
                            
                        }
                        {
                            posts == [] ? <h1>Parece que você não segue niguem, ou nenhum dos que tu seguem possuem um publicação</h1> :
                            posts.map((posts) => (
                                <CardPost key={posts.id} post={posts} />
                            ))
                        }
                    </ContainerCards>

                
                        {
                            isLessThan1000  ? (
                                <ButtonDiv>
                                    <ButtonPublish cursor={"pointer"} onClick={handleOpenPublishModal} btn_position={"fixed"} > <img className='btn_icon' src={AddIcon} /> Publicar</ButtonPublish>
                                </ButtonDiv>
                            
                            ):
                            null
                        }
                         
                   

                </Container>
                {
                    openPublishModal ? 
                    <PostModal modalIsOpen={handleOpenPublishModalToFalse} /> : null
                }
            </GlobalContainer>
        </>

    )
}

export default FeedIntial;