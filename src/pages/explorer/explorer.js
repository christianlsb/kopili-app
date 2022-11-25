import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/sidebar/sidebar";
import { GlobalContainer, ImageUserField } from "../../globalStyle/globalStyle";
import {
  BoxExplorer,
  ButtonFilterSubject,
  Container,
  InputSearch,
  ModalFindUserContainer,
} from "./style";
import SearchIcon from "../../assets/icons/Search Icon.svg";
import TecnicoIcon from "../../assets/icons/tecnico-logo.svg";
import LinguagensIcon from "../../assets/icons/lingua-logo.svg";
import MathIcon from "../../assets/icons/Matematica Icon.svg";
import NaturezaIcon from "../../assets/icons/Natureza Icon.svg";
import HumanasIcon from "../../assets/icons/Humanas.svg";
import CardExplorer from "../../components/card-explorer/CardExplorer";
import FetchExplorarData from "../../fetch-data/explorar-data";
import { SyncLoader } from "react-spinners";
import { AiFillCloseCircle } from "react-icons/ai";
import { SearchUsers } from "../../fetch-data/search-users";
import { FollowUser } from "../../fetch-data/follow-someone";

const ExplorerPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userListModal, setUserListModal] = useState(false);
  const [search, setSeach] = useState("");
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    const data = await FetchExplorarData();
    setPosts(data);
    setLoading(false);
  };

  const closeUserListModal = () => {
    setUserListModal(false);
  };
  const openUserListModal = () => {
    setUserListModal(true);
  };

  const handleSearch = (e) => {
    setSeach(e.target.value);
  };

  const searchUsers = async () => {
    const response = await SearchUsers(search);
    const data = await response.data;
    console.log(data);
    if (response.status == 200) {
      setUsers(data);
      setUserListModal(true);
    } else {
      alert("Não existe nenhum usuario com este username");
    }
  };

  const followSomeone = async (username)=>{
      const response = await FollowUser(username);
      if (response.status == 200){
        alert("Você relacionamento criado com sucesso!")
      }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <GlobalContainer>
        <SideNavbar />
        <Container>
          <BoxExplorer justify={"center"} height={"23%"} padding_top={"10px"}>
            <InputSearch>
              <div className="logo-input">
                <img onClick={searchUsers} src={SearchIcon} />
              </div>
              <input
                onChange={handleSearch}
                placeholder="Search"
                className="input-search"
              />
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
          <BoxExplorer wrap={"wrap"} justify={"space-evenly"} height={"100%"}>
            {loading ? (
              <SyncLoader className="load-icon" color="blue" />
            ) : (
              posts.map((posts) => <CardExplorer key={posts.id} post={posts} />)
            )}
          </BoxExplorer>
        </Container>
        {userListModal ? (
          <ModalFindUserContainer>
            <div className="modalFindUser">
              <div className="div-close-btn">
                <button onClick={closeUserListModal} className="btn-close">
                  <AiFillCloseCircle color="red" size={"40px"} />
                </button>
              </div>
              <div className="box-title">
                <h1>Lista de usuarios</h1>
              </div>
              <div className="box-usuarios">
                {
                
                users.length === 0 ? (<h1 style={{"margin": "45px"}} >Nenhum usuario encontrado</h1>) :
                users.map((user) => (
                  <div key={user.id} className="user">
                    <div className="box-photo">
                      <ImageUserField
                        width={"75px"}
                        height={"75px"}
                        margin_left={"10px"}
                        border={"2px solid black"}
                        src={user.image_url}
                      />
                    </div>
                    <div className="box-username">
                      <h2>{user.username}</h2>
                    </div>
                    <div className="box-btn">
                      <button onClick={ ()=>followSomeone(user.username) } className="btnFollow">Seguir</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ModalFindUserContainer>
        ) : null}
      </GlobalContainer>
    </>
  );
};

export default ExplorerPage;
