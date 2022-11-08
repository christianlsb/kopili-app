import styled from "styled-components";
import Bg_initial from "../../assets/bg_initial.svg";
import Bg_about from "../../assets/about_kopili.svg";
import Bg_verde from "../../assets/bglhverde.svg";
import Bg_azul from "../../assets/bglhazu.svg";
export const ContainerHeader = styled.div``;

export const ContainerInitial = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  background-image: url(${Bg_initial});
  background-position: center;
  background-size: cover;
`;

export const About = styled.div`
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  height: 320vh;
  background-position: center;
  background-size: cover;
  background-image: url(${Bg_about});
  box-shadow: inset 0px 80px 71px #ffffff;

  #kopili {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    height: 50%;
    background-image: url(${Bg_verde});
    background-size: cover;
    #button_bg {
      width: 379.32px;
      height: 109px;
      margin-top: 10%;
      margin-left: 8%;
      cursor: pointer;
      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 75px;
        color: #181820;
        padding-left: 1em;
      }
    }
  }

  #ourTeam {
    display: flex;
    flex-direction: column;
    height: 50%;
    background-image: url(${Bg_azul});
    background-size: cover;
  }
  #button_bg2 {
    width: 379.32px;
    height: 109px;
    margin-top: 15%;
    margin-left: 8%;
    cursor: pointer;
  }
  #team {
    display: flex;
    flex-direction: row;
    height: 50%;
    margin-top: 3%;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Img_Card = styled.img`
  
`;

export const Img_Div = styled.div`
  display: flex;
  height: 55%;
  margin-left: auto;
  margin-right: auto;
`;

export const ConteudoText = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  width: 100%;
  margin-left: 10%;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
    margin-bottom: 5%;
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 10%;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: rgba(255, 255, 255, 0.6);
  }
`;

export const TextKopili = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  padding-left: 10%;
  margin-top: 5%;
  p{
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
  }
`;

export const Img_Kopili_About = styled.img``;
