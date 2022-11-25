import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { PublishAPost } from "../../fetch-data/publish-post";
import { ButtonPublish } from "../../globalStyle/globalStyle";
import { BoxModal, ContainerModal, InputBox, ModalPost } from "./style";
import { storage } from "../../fetch-data/firebase";
import "./scroll.css";

const PostModal = ({ modalIsOpen }) => {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState("");
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [materia, setMateria] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleMateria = (e) => {
    setMateria(e.target.value);
  };
  const handleLink = (e) => {
    setLink(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const hiddenInputFile = useRef(null);

  const clickInTheInputFile = () => {
    hiddenInputFile.current.click();
  };
  const handleFile = (event) => {
    setFile(event);
    setImage(URL.createObjectURL(event));
    setIsFileChanged(true);
    
  };

  let post = {
    link: null,
    subject: null,
    description: null,
    image_url: null,
  };

  const publishAPost = async () => {
    post.link = link;
    post.subject = materia;
    post.description = description;
    post.image_url = image_url;
    console.log(post);

    const response = await PublishAPost(post);
    if (response.status == 200) {
      modalIsOpen(false);
    }
  };

  const sendImageToTheFirebase = ()=>{
     handleImageUpload();
     setIsEnabled(true);
  }

  const handleImageUpload = async (event) => {
    const storage_ref = await ref(storage, `images/${file.name}`);
    const upload_task = uploadBytesResumable(storage_ref, file).then(
      ()=> getDownloadURL(storage_ref).then((url)=>{
        setImageUrl(url)
      })
    );


    // upload_task.on("state_changed", () => {
    //   getDownloadURL(upload_task.snapshot.ref).then((url) => {
    //     setImageUrl(url);
    //     console.log(url);
    //   });
    // });
  };

  return (
    <ContainerModal>
      <ModalPost>
        <div className="div-close-btn">
          <button onClick={modalIsOpen} className="btn-close">
            <AiFillCloseCircle color="red" size={"40px"} />
          </button>
        </div>
        <BoxModal className={"scroll-modal"} height={"20%"}>
          <h1 className="title-modal">Nova publicação</h1>
        </BoxModal>
        <BoxModal>
          <InputBox>
            <div className="div-label">
              <label>Materia</label>
            </div>
            <input
              placeholder={"Matematica, Humanas, Linguagens ..."}
              className="input"
              onChange={handleMateria}
              type={"text"}
            />
          </InputBox>
          <InputBox>
            <div className="div-label">
              <label>Link</label>
            </div>
            <input
              className="input"
              onChange={handleLink}
              type={"text"}
              placeholder={"google.drive.com...."}
            />
          </InputBox>
          <InputBox>
            <div className="div-label">
              <label>Descrição</label>
            </div>
            <textarea
              placeholder="trabalho xyz..."
              onChange={handleDescription}
              className="input-description"
            />
            
          </InputBox>
          <InputBox btn_image={image}>
            <div className="div-label">
              <label>Imagem</label>
            </div>
            <button onClick={clickInTheInputFile} className="btn-add-image">
              {!isFileChanged ? (
                <>Clique aqui para adicionar uma imagem</>
              ) : null}
            </button>
            <input
              type={"file"}
              onChange={(e) => handleFile(e.target.files[0])}
              style={{ display: "none" }}
              ref={hiddenInputFile}
            />
            <button onClick={sendImageToTheFirebase} className="btnConfirmImg" >Confirmar Imagem</button>
          </InputBox>
          <ButtonPublish cursor={
            isEnabled ? "pointer"  : "not-allowed"
          } onClick={
            isEnabled ?  publishAPost : null
           
          }>Publicar</ButtonPublish>
        </BoxModal>
      </ModalPost>
    </ContainerModal>
  );
};

export default PostModal;
