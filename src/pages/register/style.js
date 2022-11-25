    import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: linear-gradient(68.66deg, #1977E0 0%, #0B60BF 49.48%, #004088 100%);
    .container-loading{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items: center;
        position:absolute;
        z-index: 10000;
        background-color: rgb(0, 0, 0, 0.5);
        

    }
`

export const BoxDivisor = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 2px solid red; */
    @media (max-width: 910px){
        display: ${props => props.display};
    }

    .div-logo{
        width:100%;
        height: 17%;
        display: flex;
        /* border: 2px solid black; */
        justify-content: flex-start;
    }
    .div-image{
        width:100%;
        height: 100%;
        display: flex;
        /* border: 2px solid black;  */
     
        justify-content: center;
        align-items: center;
        .img-bg{
            width: 400px;
        }

    }


    .register-div{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        /* align-items: center; */
        /* border: 2px solid purple; */

    }

    .div-title{
        width: 430px;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 3px solid white; */
    }


`

export const ContainerHeaderTitle = styled.div`
    width: 500px;
    /* border: 2px solid yellow; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:flex-end;
    @media (max-width: 910px){
        align-items: center;
    }
   
        h2{
            font-weight: 500;
            font-size: 2.5em;
            display: flex;
            align-items: center;
            color: #FFFFFF;
            @media(max-width: 535px){
                font-size: 2.5em;
            }
            @media(max-width: 449px){
                font-size: 2em;
            }
        }
        h3{
            font-size: 0.85em;
            font-style: normal;
            margin-bottom: 10px;
            font-weight: 300;
            color: #FFFFFF;
            @media(max-width: 449px){
                font-size: 0.8em;
            }
        }
`

export const ContainerRegister = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 430px;
    height:500px;
    background: linear-gradient(124.97deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.08) 51.56%, rgba(255, 255, 255, 0.43) 100%);
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    /* margin-left: 15%; */
    @media (max-width: 910px){
        margin-left: 0;
    }
`

export const DivLoading = styled.div`
    width: 300px;
    height: 150px;
    background-color:white;
    border-radius: 10px;
    border: 2px solid white;
    display: flex;    
    z-index: 1000;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h3{
        margin: 25px;
    }


`
