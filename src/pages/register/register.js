import {
  Container,
  BoxDivisor,
  Cadastrar,
  ContainerHeaderTitle,
  ContainerRegister,
  FormLogin,
  ForgotPassowrd,
  InputCadastro,
  ErrorMenssage,
  DivLoading,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import KopiliLogo from "../../assets/kopili-logo-register.svg";
import BgImage from "../../assets/register-image.svg";
import { FormRegisterStep1 } from "../../components/register-components/form-register-1";
import { FormRegisterStep2 } from "../../components/register-components/form-register-2";
import { FormRegisterStep3 } from "../../components/register-components/form-register-3";
import { FormRegisterStep4 } from "../../components/register-components/form-register-4";
import { useState } from "react";
import { SignUp } from "../../fetch-data/sign-up";
import { SyncLoader } from "react-spinners";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function Register() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório."),
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

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [born, setBorn] = useState("");
  const [response_status, setResponseStatus] = useState(false);
  const [show_loading_div, setShowLoadingDiv] = useState(false);


  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handleFullname = (e) => {
    setFullname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e);
    console.log(password);
  };
  const handleBorn = (e) => {
    setBorn(e);
    console.log(born);
  };
  const handlePhoto = (e) => {
    setPhoto(e);
    console.log(photo);
  };
  const handleResponseStatus = (e) => {
    setResponseStatus(e);
  };
  const handleShowLoadingDiv = (e) => {
    setShowLoadingDiv(e);
  };
  

  const user = {
    fullname: null,
    username: null,
    email: null,
    password: null,
    born: null,
    image_url: null,
  };

  const onSubmit = (data) => console.log(data);

  const [step_form, setStepForm] = useState(1);

  const handleStepForm = (step) => {
    setStepForm(step);
  };

  const makeCadastro = async () => {
    user.fullname = fullname;
    user.username = username;
    user.email = email;
    user.password = password;
    user.born = born;
    user.image_url = photo;
    if (user.image_url != "" && user.image_url != null){
      let response = await SignUp(user);
      setShowLoadingDiv(true);
      if (response.status === 200) {
        setTimeout(() => {
          setResponseStatus(true);
          setTimeout(()=>{
            navigate("/login")
          }, 4000)
        }, 5000);
       
      }
    } else {
      alert("A imagem é nula");
    }
    
  };


  return (
    <>
      <Container>
        <BoxDivisor display="none">
          <div className="div-logo">
            <img src={KopiliLogo} />
          </div>
          <div className="div-image">
            <img className="img-bg" src={BgImage} />
          </div>
        </BoxDivisor>
        <BoxDivisor>
          <div className="div-title">
            <ContainerHeaderTitle>
              <h2>Crie uma conta!</h2>
              <h3>Insira suas informações abaixo para realizar o cadastro.</h3>
            </ContainerHeaderTitle>
          </div>
          <div className="register-div">
            <ContainerRegister>
              {step_form == 1 ? (
                <FormRegisterStep1
                  setStep={handleStepForm}
                  handleEmail={handleEmail}
                  handleFullname={handleFullname}
                  handleUsername={handleUsername}
                />
              ) : null}
              {step_form == 2 ? (
                <FormRegisterStep2
                  setStep={handleStepForm}
                  handlePassword={handlePassword}
                />
              ) : null}
              {step_form == 3 ? (
                <FormRegisterStep3
                  setStep={handleStepForm}
                  handleBorn={handleBorn}
                />
              ) : null}
              {step_form == 4 ? (
                <FormRegisterStep4
                  setStep={handleStepForm}
                  handleImage={handlePhoto}
                  makeCadatro={makeCadastro}
                  
                />
              ) : null}
            </ContainerRegister>
          </div>
        </BoxDivisor>
        {show_loading_div ? (
          <div className="container-loading">
            <DivLoading>
              {response_status ? (
                <>
                  <h3>Cadastrado com sucesso</h3>
                  <AiFillCheckCircle size={"40px"} color="green" />
                </>
              ) : (
                <>
                  <h3>Criando sua conta</h3>
                  <SyncLoader color="blue" />
                </>
              )}
            </DivLoading>
          </div>
        ) : null}
      </Container>
    </>
  );
}

export default Register;
