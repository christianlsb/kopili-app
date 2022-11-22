import React, { useEffect, useState } from "react"
import SideNavbar from "../../components/sidebar/sidebar";
import { GlobalContainer } from "../../globalStyle/globalStyle";
import { BoxExplorer, ButtonFilterSubject, Container, InputSearch } from "./style";
import SearchIcon from "../../assets/icons/Search Icon.svg"
import TecnicoIcon from "../../assets/icons/tecnico-logo.svg";
import LinguagensIcon from "../../assets/icons/lingua-logo.svg";
import MathIcon from "../../assets/icons/Matematica Icon.svg";
import NaturezaIcon from "../../assets/icons/Natureza Icon.svg";
import HumanasIcon from "../../assets/icons/Humanas.svg";
import CardExplorer from "../../components/card-explorer/CardExplorer";
import FetchExplorarData from "../../fetch-data/explorar-data";
import {SyncLoader} from "react-spinners"

const ExplorerPage = () => {

    const [posts, setPosts] = useState([]);
    

    const getPosts = async ()=>{
        const data = await FetchExplorarData();
        setPosts(data);

    }

    useEffect(()=>{
        getPosts();
    }, [])

    return (
        <>
            <GlobalContainer>
                <SideNavbar />
                <Container>
                    <BoxExplorer
                        justify={"center"}
                        height={"23%"}
                        padding_top={"10px"}
                    >
                        <InputSearch >
                            <div className="logo-input">
                                <img src={SearchIcon} />
                            </div>
                            <input placeholder="Search" className="input-search" />
                        </InputSearch>
                    </BoxExplorer>
                    <BoxExplorer
                        justify={"space-evenly"}
                        height={"25%"}
                        border={"2px solid gray"}
                        overflow_x={"scroll"}
                    >
                        <ButtonFilterSubject>
                            <img className="btn-logo" src={TecnicoIcon} />
                            <p>Tecnico</p>
                        </ButtonFilterSubject>
                        <ButtonFilterSubject>
                            <img className="btn-logo-big" src={LinguagensIcon} />
                            <p>Linguagens</p>
                        </ButtonFilterSubject>
                        <ButtonFilterSubject>
                            <img className="btn-logo-big" src={MathIcon} />
                            <p>Matematica</p>
                        </ButtonFilterSubject>
                        <ButtonFilterSubject>
                            <img className="btn-logo" src={NaturezaIcon} />
                            <p>Natureza</p>
                        </ButtonFilterSubject>
                        <ButtonFilterSubject>
                            <img className="btn-logo" src={HumanasIcon} />
                            <p>Humanas</p>
                        </ButtonFilterSubject>
                    </BoxExplorer>
                    <BoxExplorer wrap={"wrap"} justify={"space-evenly"} height={"100%"} >

      
                        {
                            posts.map((posts) => 
                                (<CardExplorer key={posts.id} post={posts} />)
                            )
                        }


                    </BoxExplorer>
                </Container>
            </GlobalContainer>

        </>
    )
}

export default ExplorerPage;

