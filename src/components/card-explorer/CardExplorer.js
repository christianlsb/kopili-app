import React, { useEffect, useState } from "react";
import { ImageUserField } from "../../globalStyle/globalStyle";
import { BoxCard, BoxCardDivider, BoxImageCard, CardContainer, Divider, HeaderCard } from "./style";
import Thiago from "../../assets/thiago.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import CardHeaderFetch from "../../fetch-data/card-header";
import FetchUserImage from "../../fetch-data/user-image";


const CardExplorer = ({post })=>{

    const [username, setUsername] = useState("")
    const [photo, setPhoto] = useState("");

    const getUserPhoto = async (username)=>{
        const data = await FetchUserImage(username);
        setPhoto(data);        
    }

    const getUsername = async ()=>{
        const data = await CardHeaderFetch(post.id);
        setUsername(data);
        getUserPhoto(data)

    }

    useEffect(()=>{
        getUsername();
    })

    return (
        <>
         <CardContainer>
                <BoxImageCard  >  
                    <HeaderCard>
                        <ImageUserField src={photo}  width={"44px"} height={"43px"} />
                        <h3 className="username">{username}</h3>
                    </HeaderCard>
                </BoxImageCard>
         </CardContainer>
        </>
    )
}

export default CardExplorer;
