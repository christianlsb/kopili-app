import {Container,ContainerLeft,Cadastrar,ContainerHeaderTitle,ContainerLogin,FormLogin, ForgotPassowrd,InputCadastro,ErrorMenssage} from './style'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Login(){
    const schema = yup.object({
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório."),
        password: yup.string().required("A senha é obrigatória.").min(6, 'A senha deve conter pelo menos 6 digitos.'),
      }).required();
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = data => console.log(data);


    return(
        <>
            <Container>
                <ContainerLeft>
                        <ContainerHeaderTitle>
                            <h2>Bem-Vindo de Volta!</h2>
                            <h3>Preencha o formulário abaixo para entrar.</h3>
                        </ContainerHeaderTitle>
                        <ContainerLogin>
                                <FormLogin>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h2>Login</h2>
                                        <label>E-mail</label>
                                        <InputCadastro type="email" placeholder='' {...register("email")} error={errors.email?.message} />
                                        <ErrorMenssage>{errors.email?.message}</ErrorMenssage>
                                        <label>Senha</label>
                                        <InputCadastro type="password" placeholder=''  {...register("password")} error={errors.password?.message}/>
                                        <ErrorMenssage>{errors.password?.message}</ErrorMenssage>
                                        <ForgotPassowrd>Esqueceu sua senha?</ForgotPassowrd>
                                        <button>Entrar</button>
                                        <Cadastrar to="/forgotPassword">Não tem uma conta? <b>Cadastre-se</b></Cadastrar>
                                    </form>
                                </FormLogin>
                        </ContainerLogin>
                </ContainerLeft>
            </Container>
        </>
    )

}

export default Login;