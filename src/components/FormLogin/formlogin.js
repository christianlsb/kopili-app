import React from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";

import {
  Container,ContainerForm,ForgotPassword,Button,CreateAccount
} from "./style";

import Seta from '../../assets/entrar_seta.svg'
function FormLogin(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login_data = {
    "email": email,
    "password": password
  };

  const makeLogin = async ()=>{

    const response = await fetch("http://localhost:8081/kopili/login", {
     method: "POST",
     headers: {"Content-Type": "application/x-www-form-urlencoded"},
     body: new URLSearchParams(login_data)

    })

    if (response.status == 403){
       alert("Este email ou senha incorretos");
    }
    else {

     const data = await response.json();

       localStorage.setItem("access_token", data["access_token"]);
       localStorage.setItem("refresh_token", data["refresh_token"]);

       let decoded_jwt = jwtDecode(localStorage.getItem("access_token"))

       localStorage.setItem("user_logged", decoded_jwt["sub"])
       console.log(localStorage.getItem("access_token"));
       console.log(localStorage.getItem("refresh_token"));
       window.location.href = "/home"


    }
    
    


   //  console.log(data["access_token"]);
    
   //  console.log(jwtDecode(data["access_token"]))
   //  let decoded_jwt = jwtDecode(data["access_token"])
   //  findAllUsers(data["access_token"], decoded_jwt["sub"]);

 }

 



const handleEmail = (email)=>{
    setEmail(email.target.value);
}
const handlePassoword = (password)=>{
  setPassword(password.target.value);
}


  return (
    <>
      <Container>
        <ContainerForm>
            <div>
                <h2>Login</h2>
            </div>
            <label>Email</label>
            <input onChange={ (e)=>handleEmail(e) } placeholder="Usuario"/>
            <label>Senha</label>
            <input type="password" onChange={ (e)=>handlePassoword(e) } placeholder="••••••••" />
            <ForgotPassword to="forgotPassword">Esqueceu sua senha?</ForgotPassword>
            <Button onClick={ makeLogin } >Entrar <img src={Seta}/></Button>
            <CreateAccount>Não tem uma conta? Cadastre-se</CreateAccount>
        </ContainerForm>
                
      </Container>
    </>
  );
}
export default FormLogin;
