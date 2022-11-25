import React from "react";
import { FormRegister, InputCadastro, BtnNext, ErrorMenssage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RegisterStep3 from "../../assets/register-step3.svg";
import BtnBack from "../../assets/icons/back-icon.svg";

export const FormRegisterStep3 = ({ setStep, handleBorn }) => {
  const schema = yup
    .object({
      dia: yup.string().required(),
      mes: yup.string().required(),
      ano: yup.string().required(),
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
    const born = new Object(data);
    let bornFormated = undefined;
    let arrayDia = born["dia"].split();
    let arrayMes = born["mes"].split();
    if (arrayDia.length == 1 && arrayMes == 1 && born["dia"].charAt(0) != "0"  && born["mes"].charAt(0) != "0" ) {
      bornFormated = `${born["ano"]}-0${born["mes"]}-0${born["dia"]}`;
    } else {
      bornFormated = `${born["ano"]}-${born["mes"]}-${born["dia"]}`;
    }

    setTimeout(() => {
      handleBorn(bornFormated);
    }, 3000);
    handleStep();
  };

  const handleStep = () => {
    setStep(4);
  };

  const handleBackStep = () => {
    setStep(2);
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
          <h2>Data de nascimento</h2>
        </div>
        <div className="div-born-inputs">
          <div className="labels-div">
            <label className="label-born">Dia</label>
            <label className="label-born">Mês</label>
            <label className="label-born">Ano</label>
          </div>
          <div className="inputs-number">
            <input
              {...register("dia")}
              className="input-dia"
              type="text"
              max="31"
              min="01"
            />
            <input
              {...register("mes")}
              className="input-mes"
              max="12"
              min="01"
              type="text"
            />
            <input
              {...register("ano")}
              className="input-ano"
              max="2100"
              min="1920"
              type="text"
            />
          </div>
        </div>
        <ErrorMenssage>{errors.password?.message}</ErrorMenssage>
        <button type="submit" className="btnForm">
          Continuar
        </button>
      </form>
      <div className="register-steps">
        <img src={RegisterStep3} alt="" />
      </div>
    </FormRegister>
  );
};
