import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader  = styled.div`
    display: flex;
    width: 100%;
    height: 140px;
    /* border: 2px solid red; */
    justify-content: space-around;
    #left{  
        width: 50%;
        
    }

    .right{
        width: 50%;
        display: flex;
        justify-content:center;
        /* border: 2px solid blue; */
        
    }
`

export const Button = styled(NavLink) `
    width: 207.45px;
    height: 57px;
    background: #FFFFFF;
    padding: 20px;

    border: 3px solid #000000;
    text-decoration: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: #312A2B;
    margin-right: 3em;
    margin-top: 1.5em;
`

export const BackgroundButton = styled.div`
    background: #12AE22;
`