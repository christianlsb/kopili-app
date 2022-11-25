import React, { useRef, useState } from "react";
import { FormRegister, InputCadastro, BtnNext, ErrorMenssage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RegisterStep4 from "../../assets/register-step4.svg";
import BtnBack from "../../assets/icons/back-icon.svg";
import ImageUploading from "react-images-uploading";
import ImageBtnUpload from "../../assets/btn-upload-photo.svg";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../fetch-data/firebase";

export const FormRegisterStep4 = ({ setStep, handleImage, makeCadatro }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState([]);

  const handleBackStep = () => {
    setStep(3);
  };

  const hiddenFileInput = useRef(null);

  const clickTheHiddenInput = () => {
    hiddenFileInput.current.click();
  };

  const handleImageUpload = (event) => {
    const image = URL.createObjectURL(event);
    setImage(image);
    setFile(event);
   
  };


  const buttonImage = useRef(null);

  const clickTheButtonImage = () => {
     buttonImage.current.click()
  };

  const handleFirebaseImageUpload = (event) => {
    const storage_ref = ref(storage, `images/${file.name}`);
    const upload_task = uploadBytesResumable(storage_ref, file);
    upload_task.on("state_changed", () => {
      getDownloadURL(upload_task.snapshot.ref).then((url) => {
        handleImage(url)
        console.log(url);
      });
    });
  };

  const signUpUser = () => {
    makeCadatro();
  };

  return (
    <FormRegister form_height={"500px"}>
      <div className="div-form">
        <div className="div-btn-back">
          <button onClick={handleBackStep} className="btn-back">
            <img src={BtnBack} alt="" />
          </button>
        </div>
        <div className="div-form-title">
          <h2>Sua foto</h2>
        </div>
        <div className="div-image-upload">
          <button onClick={clickTheHiddenInput} className="btn-image-upload">
            <img
              className="img-upload"
              src={image != null ? image : ImageBtnUpload}
              alt=""
            />
          </button>
          <input
            onChange={ (e)=>handleImageUpload(e.target.files[0])}
            ref={hiddenFileInput}
            type="file"
            style={{ display: "none" }}
          />
        </div>
        <button onClick={ handleFirebaseImageUpload } className="btnConfirmPhoto" >Confirmar foto</button>
        <button
          type="button"
          onClick={signUpUser}
          className="btnForm"
        >
          Finalizar
        </button>
      </div>
      <div className="register-steps">
        <img className="img-upload" src={RegisterStep4} alt="" />
      </div>
     
    </FormRegister>
  );
};
