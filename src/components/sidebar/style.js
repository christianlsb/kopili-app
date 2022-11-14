import styled from "styled-components"

export const SidebarContainer = styled.div`
    height: 100vh;
    width: 350px;
    background-color: white;
    transition: left 0.3s ease-in-out;
    /* position: fixed; */
    z-index: 20;
 
   
    .menu{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        width: 350px;
        height: 57%;
        /* border: 3px solid red; */
        @media screen {
            @media (min-height: 800px){
                height: 55%;
            }
            @media (min-height: 900px){
                height: 50%;
            }      
        }
    }
    .sidebar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* border: 2px solid yellow; */
        height: 100%;
      
       
       
        
    }
    .menu-item{
        margin: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: w;
        justify-content: flex-start;
        /* border: 2px black solid; */
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        width: 300px;
        .lkTtqM:hover {
          background-color: transparent;
        }
    }
   
    .active{
        border-left: 5px solid black;
        border-right: 5px solid black;
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.14);
    }
    

`

export const PhotoAndUsernameBox = styled.div`
    width: 350px;
    height: 30%;
    display: flex;
    /* border: 2px solid purple; */
    flex-direction: column;

`

export const LogoBox = styled.div`
    width: 350px;
    height: 13%;
    display: flex;
    justify-content: space-between;
    /* border: 5px solid green; */
    .logo-img{
        width: 195.12px;
        height: 100%;
        margin-right: 40px;
        /* border: 3px solid blue; */
    }
    .btn_fechar{
        border: transparent;
        background-color: transparent;
        cursor: pointer;
        width: 20%;
        

    }


`

export const BoxPhotoAndUsername = styled.div`
    width: 350px;
    display: flex;
    height: ${props => props.height};
    justify-content: center;
    align-items: center;
    /* border: solid 2px cyan; */
    .username{
         font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    @media screen {
        @media (max-height: 800px){
            height: 100%;
        }   
    }


`

export const BoxHeaderMobile = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    /* border: 2px solid pink; */
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    @media screen {
        @media (max-width: 550px){
            width: ${props => props.media_500_width};
        }
        @media (max-width: 410px){
            width: ${props => props.media_410_width};
        }      
    }

`



export const Line = styled.div`
    width: 90%;
    border: 2px solid #B9B9B9;
    margin-left: auto;
    margin-right:auto;
    margin-top: 5px;
`
