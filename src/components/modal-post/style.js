import styled from "styled-components"

export const ContainerModal = styled.div`
    width: 100%;
    position: absolute;
    z-index: 200000;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ModalPost = styled.div`
    width: 517px;
    height: 525px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border:2px solid black;
    display:flex;
    align-items:center;
    z-index: 1000;
    overflow-y: scroll;
    border-radius: 10px;
    ::-webkit-scrollbar{
        width: 2px;
        border-radius: 20px;
    }
    
    left: 300px;
    top:40px;
    .div-close-btn{
        display: flex;
        width: 100%;
        height: 10vh;
        /* border: 2px solid red; */
        justify-content: flex-end;
        .btn-close{
            background-color: transparent;
            border: transparent;
            cursor: pointer;
            margin:10px;
        }
       
    }
    

`


export const BoxModal = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;
    
    width: 70%;
    margin-bottom: 20px;
    height: ${props => props.height};
    /* border:  2px solid red; */
    .title-modal{
        font-size: 1.9em;
        padding: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .btn-publicar{

    }

`

export const InputBox = styled.div`
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 70%; */
    /* padding: 20px; */
    display: flex;
    /* border: 2px solid blue; */
    .btnConfirmImg{
        font-size: 1.2em;
        border: transparent;
        background-color: black;
        color: white;
        border-radius: 20px;
        padding: 10px;
        margin-top: 12px;
        :hover{
            background-color: white;
            border: 1px solid black;
            color: black;
            transition: 0.7s;
        }
    }
    .div-label{
        display: flex;
        width: 400px;
        /* border: 2px solid purple; */
        justify-content: flex-start;
        align-items: center;
        label{
            font-size: 1.2em;
            font-family: "Poppins";
        }
    }

    .input{
        width: 400px;
        height: 40px;
        font-size: 1em;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        border: 2px solid black;
    }
    .input-description{
        width: 400px;
        height: 200px;
        font-size: 0.8em;
        font-family: "Poppins";
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        resize: none;
        border-radius: 10px;
        outline: none;
        border: 2px solid black;
    }
    .btn-add-image{
        width: 400px;
        background-image: url(${props => props.btn_image});
        height: 400px;
        background-size: cover;
        font-size: 1.2em;
        font-family: "Poppins";
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items:center;
        resize: none;
        border-radius: 10px;
        outline: none;
        border: 2px solid black;
        cursor: pointer;
        background-color: white;
    }


`