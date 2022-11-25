import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: linear-gradient(68.66deg, #1977E0 0%, #0B60BF 49.48%, #004088 100%);
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
        justify-content: flex-end;
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


    .login-div{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        /* align-items: center; */
        /* border: 2px solid purple; */

    }

    .div-title{
        width: 500px;
        height: 30%;
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
    align-items:center;
   
        h2{
            font-weight: 500;
            font-size: 3em;
            display: flex;
            align-items: center;
            color: #FFFFFF;
            @media(max-width: 1411px){
                font-size: 45px;
            }
            @media(max-width: 535px){
                font-size: 2.5em;
            }
            @media(max-width: 449px){
                font-size: 2em;
            }
        }
        h3{
            font-size: 1em;
            font-style: normal;
            font-weight: 300;
            color: #FFFFFF;
            @media(max-width: 1411px){
                font-size: 18px;
            }
            @media(max-width: 449px){
                font-size: 0.8em;
            }
        }
`

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 430px;
    height:460px;
    background: linear-gradient(124.97deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.08) 51.56%, rgba(255, 255, 255, 0.43) 100%);
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    /* margin-left: 15%; */
    @media (max-width: 910px){
        margin-left: 0;
    }
`

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
    h2{
        margin-top: 5%;
        font-weight: 800;
        font-size: 36px;
        line-height: 54px;
        color: #FFFFFF;
    }
    label{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-top: 5%;
        margin-bottom: 2%;
    }
   

    button{
        background: #000000;
        border-radius: 45px;
        cursor: pointer;
        height: 44px;
        font-weight: 600;
        outline:none;
        border: transparent;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-top: 5%;
        :hover{
            background-color:  #ffffff;
            color: black;
            transition: 0.8s;
 
        }
    }
    form{
        display: flex;
        /* border:2px solid red;    */
        flex-direction: column;
        height: 100%;
    }
`

export const InputCadastro = styled.input`
    border: none;
    outline: none;
    height: 44px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 19px;
    border: ${props => props.error ? '2px solid red' : 'none'};
    ::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 33px;
        letter-spacing: 0.1em;
        color: #370001;
    }
`

export const ForgotPassowrd = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-decoration: none;
    margin-left: auto;
    margin-top: 5%;
`

export const Cadastrar = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
`

export const ErrorMenssage = styled.p`
  color: red;
`