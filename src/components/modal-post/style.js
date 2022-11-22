import styled from "styled-components"


export const ModalPost = styled.div`
    width: 517px;
    height: 525px;
    display: flex;
    flex-direction: column;
    border:2px solid black;
    overflow-y: scroll;
    border-radius: 10px;
    position: absolute;
    left: 300px;
    top:40px;
    

`

export const BoxModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 100%;
    height: ${props => props.height};
    border:  2px solid red;
    .title-modal{
        font-size: 1.9em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

`

export const InputBox = styled.div`
    width: 70%;
    height:525px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 70%; */
    /* padding: 20px; */
    display: flex;
    border: 2px solid blue;

    .div-label{
        display: flex;
        width: 80%;
        border: 2px solid purple;
        justify-content: flex-start;
        align-items: center;
    }

    .input{
        width: 80%;
    }


`