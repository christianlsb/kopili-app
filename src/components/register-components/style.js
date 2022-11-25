import styled from "styled-components";
import { Link } from "react-router-dom";
export const FormRegister = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;

    .btnConfirmPhoto{
        background: #000000;
        border-radius: 45px;
        cursor: pointer;
        margin-top: ${props => props.margin_btn};
        height: 30px;
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
    /* border: 2px solid red; */
    h2{
        margin-top: 4%;
        font-weight: 800;
        font-size: 2em;
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
   

    .btnForm{
        background: #000000;
        border-radius: 45px;
        cursor: pointer;
        margin-top: ${props => props.margin_btn};
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
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        /* border: 2px solid; */
        height:${props => props.form_height};
    }
    .div-form{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        /* border: 2px solid; */
        height:${props => props.form_height};
    }
    .register-steps{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
    }

    .div-form-title{
        width: 100%;
        display: flex;
        justify-content:center;
        /* border: 2px solid yellow; */
    }
    .btn-back{
        background-color: transparent;
        border: transparent;
        cursor: pointer;
        :hover{
            background-color: transparent;
        }
    }
    .div-born-inputs{
        display: flex;
        width: 100%;
        height: 30vh;
        flex-direction: column;
        
      
        justify-content: center;
        align-items: center;
        /* border: 2px solid white; */
        .input-number{
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
            /* border: 2px solid red; */
           
        }
        .input-dia{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0.38) 100%);
            border: 2px solid #FFFFFF;
            border-radius: 15px 0px 0px 15px;
            width: 108px;
            outline: none;
            height: 59px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            /* display: flex; */
            /* align-items: center; */
            text-align: center;
            letter-spacing: 0.1em;
               
            color: #FFFFFF;
        }
      
}
        .input-mes{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0.38) 100%);
            border: 2px solid #FFFFFF;
            outline: none;
            width: 108px;
            height: 59px;
            margin: 0px 5px 0px 5px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            /* display: flex;
            align-items: center; */
            text-align: center;
            letter-spacing: 0.1em;
                    
            color: #FFFFFF;
        }
        .input-ano{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0.38) 100%);
            border: 2px solid #FFFFFF;
            width: 108px;
            outline: none;
            height: 59px;
            border-radius: 0px 15px 15px 0px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            /* display: flex;
            align-items: center; */
            text-align: center;
            letter-spacing: 0.1em;
                    
            color: #FFFFFF;
        }
        .labels-div{
            display: flex;
            width: 80%;
            justify-content: space-between;
            .label-born{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.1em;

                color: #FFFFFF;
            }
        }

        .div-image-upload{
            width: 100%;
            display: flex;
            /* border: 2px solid orange; */
            height: 30vh;
            justify-content: center;
            .btn-image-upload{
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 120px;
                border-radius: 80px;    
                /* border: 2px solid black; */
                border: transparent;
                .img-upload{
                    display: flex;
                    width: 170px;
                    /* border: 2px solid red; */
                    border-radius:100px;
                }


            }


        }
        
    

`

export const InputCadastro = styled.input`
    border: none;
    outline: none;
    height: 40px;
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



export const BtnNext = styled(Link)`
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

export const InputBornDate = styled.input`
    

`

export const ErrorMenssage = styled.p`
  color: red;
`