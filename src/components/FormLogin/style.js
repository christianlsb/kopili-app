import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    124.97deg,
    rgba(255, 255, 255, 0.38) 0%,
    rgba(255, 255, 255, 0.08) 51.56%,
    rgba(255, 255, 255, 0.43) 100%
  );
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 460px;
  height: 550px;
  margin: 30px 0 0 81px;
  @media (max-width: 425px){
    width: 360px;
    height: 450px;
    margin: 30px auto 0 35px;
  }

  @media (max-width: 375px){
    width: 330px;
    height: 450px;
    margin: 30px auto 0 15px;
  }

  @media (max-width: 325px){
    width: 300px;
    height: 450px;
    margin: 30px auto 0 15px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 448px;
  margin: 53px 0 0 66px;
  div > h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: #ffffff;
    margin-top: 35px;
    margin-bottom: 10px;
  }

  input {
    width: 327px;
    height: 44px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 19px;
    ::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1em;
      color: #370001;
    }
  }

  @media (max-width: 425px){
    width: 260px;
    height: 350px;
    align-content: center;
    justify-content: center;
    input{
        width: 90%;
    }
    
  }

  @media (max-width: 375px){
    width: 260px;
    height: 350px;
    align-content: center;
    justify-content: center;
    input{
        width: 90%;
    }
  }

  @media (max-width: 325px){
    width: 217px;
    height: 350px;
    align-content: center;
    justify-content: center;
    input{
        width: 80%;
    }
    label{
        width: 80%;
    }
  }

  @media screen {
        @media (min-height:720px){
              height: 200px;
              
        } 
    }


`;

export const ForgotPassword = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-decoration: none;
  margin-left: auto;
  margin-top: 10px;
  @media (max-width: 325px){
    width: 80%;
   
  }
`;

export const Button = styled.button`
  width: 327px;
  height: 44px;
  background: #000000;
  outline: none;
  border-radius: 45px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
  border: transparent;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;

  img {
    margin-left: 14px;
  }

  @media (max-width: 425px){
        width: 80%;
        border: none;
  }
`;

export const CreateAccount = styled(Link)`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    @media (max-width: 325px){
    width: 80%;
   
  }
`
