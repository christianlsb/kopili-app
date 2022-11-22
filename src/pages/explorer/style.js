import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* border: 3px solid red; */
    flex-direction: column;
    @media (max-width: 1000px){
        position: relative;
        top: 13%;
        
    }


`

export const BoxExplorer = styled.div`
    width: 100%;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.wrap};
    align-items: ${props => props.align};
    overflow-y: scroll;
    overflow-x: ${props => props.overflow_x};
    height: ${props => props.height};
    display: flex;
    border-bottom:${props => props.border};
    padding-top: ${props => props.padding_top};
    /* border: 2px solid blue; */
    /* justify-content: space-evenly; */

`
export const InputSearch = styled.div`
    width: 95%;
    height: 60%;
    display: flex;
    justify-content: center;
   
    border: 2px solid gray;
    
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 23px;
    .input-search{
        width: 100%;
        height: 100%;
        border-radius: 23px;
        border:transparent;
        font-size: 1.2em;
        outline: none;
    }
    .logo-input{
        display: flex;
        width: 8%;
        height: 100%;
        justify-content: center;
        align-items: center;
        /* border-right: 2px solid gray; */
    }
`

export const ButtonFilterSubject = styled.button`
    width: 180px;
    height: 70px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
    border: transparent;
    border-radius: 30.5px;
    background: linear-gradient(
        180deg, 
        #000000 -18.97%,
         #380070 11.02%, 
         #4F06AD 33.86%, 
         #5500DF 48.14%, 
         #5200BB 63.13%, 
         #3E028A 79.55%, 
         #000000 118.1%);
        
    .btn-logo{
        width: 40px;

    }
     .btn-logo-big{
        width: 30px;

    }
    p{
        font-size: 1.4em;
    }


`