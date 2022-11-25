import React, { useContext, useState } from "react";
import {
    FormRegister,
    InputCadastro,
    BtnNext,
} from "./style"

import RegisterStep1 from "../../assets/register-step1.svg"
import { SignUpContext } from "../../context/signUpContext";


export const FormRegisterStep1 = ({ setStep, handleFullname, handleUsername, handleEmail }) => {


  const handleStep =()=>[
    setStep(2)
  ]


  return (
    <FormRegister form_height={"500px"} >
      <form>
        <h2>Sign up</h2>
        <label>Nome completo</label>
        <InputCadastro
          type="text"
          placeholder="João da Silva..."
          onChange={
            handleFullname
          }

        />
        <label>Username</label>
        <InputCadastro
          type="text"
          placeholder="João123..."
          onChange={
            handleUsername
          }

        />
        <label>Email</label>
        <InputCadastro
          type="email"
          placeholder="example@email.com"
          onChange={handleEmail}
        />
        <button className="btnForm" onClick={ handleStep } >Continuar</button>
        <BtnNext to="/login">
          Ja possui uma conta? <b>Entre aqui!</b>
        </BtnNext>
      </form>
      <div className="register-steps">
        <img src={ RegisterStep1 } alt="" />
      </div>
    </FormRegister>
  );
};
