// import Api from "./api"

// const FetchUserImage = async (username) => {


//     try {
//         const response = await Api.get(`user/findUserImage/username=${username}`, {
//             headers: {
//                 "Authorization": `Bearer ${localStorage.getItem("access_token")}`
//             },
//             responseType: "blob"
//         })
//         if (response.status == 403){
//             console.log("Usuario sem imagem")
//         } else {
//             const data = await response.data;
//             const image = URL.createObjectURL(data);
//             return image;
//         }

//     }catch(error){
//         console.log("ERRO: "+ error);

//     }

    


// }

// export default FetchUserImage;