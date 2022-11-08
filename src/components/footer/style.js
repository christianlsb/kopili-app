import styled from "styled-components";

export const Container = styled.div`
    height: 35vh;
    width: 100%;
    background: #000B6C;
    display: flex;
    flex-direction: column;
`

export const ContainterConteudo = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 70%;
    margin-top: 2%;
    margin-bottom: auto;   
    margin-left :auto ;
    margin-right: auto;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #DDDDDD;
        margin-top: auto;
        margin-bottom: auto;
    }
`


export const Img_Logo = styled.img `
    margin-right: 5%;
`
export const ContainerBottom = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerBottomLeft = styled.div`
    width: 120%;
    height: 50%;
    background-color: gray;
    margin-top: auto;
    background: #000234;
    border-radius: 0px 100px 0px 0px;
    display: flex;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #FFFFFF;
        margin-left: 8%;
        margin-top: auto;
        margin-bottom: auto;
      

    }
`

export const ContainerBottomMid = styled.div`
    width: 100%;
    height: 30%;
    margin-top: auto;
    justify-content: center;
`

export const ContainerBottomRight = styled.div`
    width: 120%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000234;
    border-top-left-radius: 100px;
    margin-top: auto;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #FFFFFF;
        margin-left: 8%;
    }
`
