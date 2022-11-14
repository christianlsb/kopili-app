import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    
    }
`

export const GlobalContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    /* border: 8px solid purple; */
    /* position: fixed; */
    /* justify-content: ;
    align-items: center; */



    .bm-burger-button{
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
    
    }
    .bm-burger-bars{
        background-color: black;
    }

    .bm-menu{
        width: 350px;
    }


    .ReactCollapse--collapse {
        /* transition: height 0.5s; */
        transition: ease-in-out 0.5s;
    }
    


`;

export const ImageUserField = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 100px;
    border: ${props => props.border};
    padding:${props => props.padding};
   @media screen {
        @media (min-height: 900px){
            width: ${props => props.min_height_900_width};
            height: ${props => props.min_height_900_height};
        }
   }

`;

export const ButtonPublish = styled.button`
    position: fixed;
    width: 143px;
    border-radius: 17px;
    border: transparent;
    background: linear-gradient(180deg, #000000 -18.97%, #004170 11.02%, #065DAD 33.86%, #00669F 48.14%, #0056BB 63.13%, #02598A 79.55%, #000000 118.1%);
    height: 49px;
    color: white;
    font-size:17px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    z-index: 90;
    margin-right: ${props => props.margin};
    .btn_icon{
        margin-right: 10px;
    }

`


export const ButtonSidebar = styled.button`
    font-size: 19px;
    padding: 2px;
    border: 2px solid red;
    display: none;
    @media screen {
        @media (max-width: 1000px){
            display: initial;
        }   
    }

`

export const HeaderMobile = styled.div`
    @media (max-width: 1000px){
        width: 100%;
        height: 13%;
        border-bottom: solid 1px black;
        background-color: white;
        z-index: 50;
        position: fixed;
        display: flex;
        justify-content: flex-end;
        
        align-items: center;
      
        
    }

 

`