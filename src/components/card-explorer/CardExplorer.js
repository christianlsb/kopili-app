import React, { useEffect, useState } from "react";
import { ImageUserField } from "../../globalStyle/globalStyle";
import { BoxCard, BoxCardDivider, BoxImageCard, CardContainer, Divider, HeaderCard } from "./style";
import Thiago from "../../assets/thiago.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import CardHeaderFetch from "../../fetch-data/card-header";



const CardExplorer = ({post })=>{

    const [cardHeader, setCardHeader] = useState({});
    
    const fetchTheCardHeader = async ()=>{
        const data = await CardHeaderFetch(post.id);
        setCardHeader(data)
    }

    useEffect(()=>{
        fetchTheCardHeader();
    }, [])
  
    useEffect(()=>{
        
    })

    return (
        <>
         <CardContainer>
                <BoxImageCard image={post.image_url} >  
                    <HeaderCard >
                        <ImageUserField src={cardHeader.image_url}  width={"44px"} height={"43px"} />
                        <h3 className="username">{cardHeader.username}</h3>
                    </HeaderCard>
                </BoxImageCard>
         </CardContainer>
        </>
    )
}

export default CardExplorer;
