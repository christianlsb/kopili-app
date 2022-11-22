import styled from "styled-components";

export const ContainerHeader  = styled.div`
    display: flex;
    width: 100%;
    height: 140px;
    justify-content: space-around;
    #left{
        width: 50%; 
    }

    #right{
        width: 50%;
    }
`

export const Button = styled.button `
    width: 207.45px;
    height: 57px;
    background: #FFFFFF;
    border: 3px solid #000000;
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