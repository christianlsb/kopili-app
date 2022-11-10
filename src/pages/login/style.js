import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: linear-gradient(68.66deg, #1977E0 0%, #0B60BF 49.48%, #004088 100%);
`

export const ContainerLeft = styled.div`
    display: flex;
    width: 45%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerHeaderTitle = styled.div`
    
        
    width: 80%;
    height: 15%;
    margin-bottom: 5%;
    h2{
        font-weight: 500;
        font-size: 3em;
        line-height: 81px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    h3{
        font-size: 1em;
        font-style: normal;
        font-weight: 300;
        line-height: 27px;
        color: #FFFFFF;
    }
`

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 70%;
    background: linear-gradient(124.97deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.08) 51.56%, rgba(255, 255, 255, 0.43) 100%);
    border: 1px solid #FFFFFF;
    border-radius: 10px;
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
        margin-bottom: 5%;
    }
    input{
        border: none;
        outline: none;
        height: 44px;
        background: #FFFFFF;
        border-radius: 5px;
        padding-left: 19px;
        ::placeholder{
            font-weight: 400;
            font-size: 16px;
            line-height: 33px;
            letter-spacing: 0.1em;
            color: #370001;
        }
    }

    button{
        background: #000000;
        border-radius: 45px;
        cursor: pointer;
        height: 44px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-top: 5%;
    }
    form{
        display: flex;
        flex-direction: column;
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
    margin-top: 25%;
`

export const ErrorMenssage = styled.p`
  color: red;
  margin-top: 5px;
`