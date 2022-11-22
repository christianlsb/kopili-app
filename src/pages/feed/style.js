import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    overflow-y: scroll;
    /* position: fixed; */
    display: flex;
    /* overflow-y: scroll; */
    flex-direction: row;
    /* flex-wrap: wrap; */
    border-left: solid 20px transparent;
    justify-content: center;
    align-items: flex-start;
    @media screen {
        
        @media (min-width:1400px){
            border-left: solid 70px transparent;
        }

        @media (max-width: 1000px){
            border-left: solid 0px transparent;
        }

        @media (max-width: 500px){
            border-top: solid 90px transparent;
            border-left: solid 0px transparent;
        }   
    }

`
export const ButtonDiv = styled.div`
    width: 30%;
    height: 20%;
    /* border: 2px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1020px){
        width: 35%;
    }

`




export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid blue; */
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;

`

