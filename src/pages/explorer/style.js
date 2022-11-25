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

    .load-icon{
        margin-top: 200px;
    }

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
        cursor: pointer;
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

export const ModalFindUserContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 20000;
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
    

    .modalFindUser{
        width: 600px;
        height: 600px;
        border-radius: 20px;
        border: 5px solid black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-color: white;
        overflow-y: scroll;

        .box-title{
            width: 100%;
            height: 20vh;
            margin-bottom: 30px;
            /* border: 2px solid red; */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box-usuarios{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* border: 2px solid blue; */
        }
        .user{
            width: 90%;
            border-radius: 0px 20px 20px 0px;
            height: 15vh;
            display: flex;
            border: 2px solid black;
            margin-bottom: 20px;
            align-items: center;
            justify-content: flex-start;
            .box-photo{
                display: flex;
                /* border: 1px solid yellow; */
                width: 20%;
                justify-content:center;
                align-items: center;
            }
            .box-username{
                display: flex;
                /* border: 1px solid red; */
                 width: 60%;
                justify-content:center;
                align-items: center;
            }
            .box-btn{
                display: flex;
                width: 80%;
                /* border: 1px solid blue; */
                justify-content:flex-end;
                margin-right: 10px;
                align-items: center;
            }
            .btnFollow{
                font-size: 1.1em;
                background: linear-gradient(180deg, #000000 -18.97%, #004170 11.02%, #065DAD 33.86%, #00669F 48.14%, #0056BB 63.13%, #02598A 79.55%, #000000 118.1%);
                border: transparent;
                padding:10px;
                color:white;
                border-radius: 10px;
                cursor: pointer;
            }
            

        }


    }

`