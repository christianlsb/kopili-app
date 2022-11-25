import React, { useState } from "react";
import { FormRegister, InputCadastro, BtnNext, ErrorMenssage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RegisterStep2 from "../../assets/register-step2.svg";
import BtnBack from "../../assets/icons/back-icon.svg";

export const FormRegisterStep2 = ({ setStep, handlePassword }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDifferentThePass, setIsDifferentThePass] = useState(false);

  const schema = yup
    .object({
      password: yup
        .string()
        .required("A senha é obrigatória.")
        .min(6, "A senha deve conter pelo menos 6 digitos."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    let pass = new Object(data);
    if (pass["password"] != confirmPassword) {
      setIsDifferentThePass(true);
    } else {
      if (pass["password"].length >= 6) {
        handlePassword(pass["password"]);
        handleStep();
      }
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleStep = () => {
    setStep(3);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  return (
    <FormRegister form_height={"500px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-btn-back">
          <button onClick={handleBackStep} className="btn-back">
            <img src={BtnBack} alt="" />
          </button>
        </div>
        <div className="div-form-title">
          <h2>Defina sua senha</h2>
        </div>

        <label>Senha</label>
        <InputCadastro
          type="password"
          placeholder=""
          {...register("password")}
          error={errors.password?.message}
        />
        <ErrorMenssage>{errors.password?.message}</ErrorMenssage>
        <label>Confirmar Senha</label>
        <InputCadastro
          type="password"
          placeholder=""
          onChange={handleConfirmPassword}
        />
        {isDifferentThePass ? (
          <ErrorMenssage>As senhas não coincidem</ErrorMenssage>
        ) : null}

        <button type="submit" className="btnForm">
          Continuar
        </button>
      </form>
      <div className="register-steps">
        <img src={RegisterStep2} alt="" />
      </div>
    </FormRegister>
  );
};
