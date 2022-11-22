import styled from "styled-components";
import HeaderCardImage from "../../assets/header-card.svg"

export const CardContainer = styled.div`
    width: 500px;
    height: 500px;
     margin-bottom: -25px; 
     margin-top: 45px;
     /* margin-left: 70px;   */
    border-radius: 23px 23px 23px 23px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    position: relative;
    
    @media screen {
        @media (max-width: 1000px){
            margin-left: 0px;
            margin-bottom: 40px;
            top: 100px;
          
         
        }   
        @media (max-width: 500px){
            border-radius: 0px;
            width: 100%;
            height: 380px;
            top: 0px;
        }
    }


`

export const HeaderCard = styled.div`
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.2);  */
    background:url(${HeaderCardImage}) cover no-repeat;
    height: 79px;
    border: 3px solid blue;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0px 5px 10px;
    @media screen {
        @media (max-width: 500px){
            border-radius: 0px;
        }   
    }
    .username{
        margin: 15px;
        color: white;
    }

`
export const BoxImageCard = styled.div`
    width: 100%;
    height: 500.73px;
    background-image: url("https://www.macau.rn.leg.br/images/galeria_em_artigos/image04_grd.png");
    /* border: 2px solid red; */
    display: flex;
    border-radius: 23.8px 23.8px 0px 0px;
    @media screen {
        @media (max-width: 500px){
            border-radius: 0px;
        }   
    }

`

export const BoxCard = styled.div`
    width: 100%;
    height: 25%;
    border-top: 1px solid black;
    /* border: 2px solid red; */
    display: flex;
    @media screen {
        @media (max-width: 500px){
            height: 30%;
        }   
    }



`

export const BoxCardDivider = styled.div`
    width: ${props => props.width};
    height: 100%;
    /* border: solid 2px black; */
    display: flex;
    justify-content: center;
    padding:15px;
    align-items: ${props => props.align_item};
    .description{
        margin-top: 10px;
        font-size: 0.9em;
        font-family: Arial, Helvetica, sans-serif;

    }

    .btn{
        border: transparent;
        background-color: transparent;
        cursor: pointer;

    }
    


`

export const Divider = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: ${props => props.divisor_align};
        /* border: 2px solid purple; */
        height: 50%;

`