import React, { useEffect, useState } from "react";
import { ImageUserField } from "../../globalStyle/globalStyle";
import { BoxCard, BoxCardDivider, BoxImageCard, CardContainer, Divider, HeaderCard } from "./style";
import Thiago from "../../assets/thiago.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import CardHeaderFetch from "../../fetch-data/card-header";


const CardPost = ({ post })=>{

    const [cardHeader, setCardHeader] = useState({});
    
    const fetchTheCardHeader = async ()=>{
        const data = await CardHeaderFetch(post.id);
        setCardHeader(data)
    }



    useEffect(()=>{
        fetchTheCardHeader();
    }, [])

    return (
        <>
         <CardContainer>
                <BoxImageCard image={post.image_url} >  
                    <HeaderCard>
                        <ImageUserField src={cardHeader.image_url}  width={"44px"} height={"43px"} />
                        <h3 className="username">{cardHeader.username}</h3>
                    </HeaderCard>

                </BoxImageCard>
                <BoxCard >
                    <BoxCardDivider width={"100%"} align_item={"flex-start"} >
                        <p className="description" >{ post.description }</p>
                    </BoxCardDivider>
                    <BoxCardDivider  width={"40%"} align_item={"center"} >
                        <Divider divisor_align={"center"} >   
                        <button className="btn" ><AiOutlineHeart size={"30px"} /></button>
                        </Divider>
                        <Divider>
                            <p>0</p>
                        </Divider>
                    </BoxCardDivider>
                    <BoxCardDivider width={"40%"} align_item={"center"} >
                    <Divider divisor_align={"center"} >   
                        <button className="btn" ><FaRegComment  size={"25px"} /></button>
                        </Divider>
                        <Divider>
                            <p>0</p>
                        </Divider>
                    </BoxCardDivider>
                </BoxCard>

         </CardContainer>
        </>
    )
}

export default CardPost;
