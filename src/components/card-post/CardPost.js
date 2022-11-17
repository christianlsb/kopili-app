import React from "react";
import { ImageUserField } from "../../globalStyle/globalStyle";
import { BoxCard, BoxCardDivider, BoxImageCard, CardContainer, Divider, HeaderCard } from "./style";
import Thiago from "../../assets/thiago.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"


const CardPost = ()=>{

    


    return (
        <>
         <CardContainer>
                <BoxImageCard  >  
                    <HeaderCard>
                        <ImageUserField src={Thiago}  width={"44px"} height={"43px"} />
                        <h3 className="username">Chines443  </h3>
                    </HeaderCard>

                </BoxImageCard>
                <BoxCard >
                    <BoxCardDivider width={"100%"} align_item={"flex-start"} >
                        <p className="description" >Trabalho legal muito pica legal isso mesmo foda pa carai</p>
                    </BoxCardDivider>
                    <BoxCardDivider  width={"40%"} align_item={"center"} >
                        <Divider divisor_align={"center"} >   
                        <button className="btn" ><AiOutlineHeart size={"30px"} /></button>
                        </Divider>
                        <Divider>
                            <p>100</p>
                        </Divider>
                    </BoxCardDivider>
                    <BoxCardDivider width={"40%"} align_item={"center"} >
                    <Divider divisor_align={"center"} >   
                        <button className="btn" ><FaRegComment  size={"25px"} /></button>
                        </Divider>
                        <Divider>
                            <p>100</p>
                        </Divider>
                    </BoxCardDivider>
                </BoxCard>

         </CardContainer>
        </>
    )
}

export default CardPost;
