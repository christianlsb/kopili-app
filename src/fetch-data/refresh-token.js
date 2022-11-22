import jwtDecode from "jwt-decode"
import Api from "./api";

const RefreshToken = async ()=>{

    const response = null;

   const decoded_access_token = jwtDecode(localStorage.getItem("access_token"))
   const refresh_token = localStorage.getItem("refresh_token");
   const decoded_refresh_token = jwtDecode(refresh_token);
    
    console.log(decoded_access_token);

    // if (decoded_access_token["exp"] > Date.now()){
    //     response = await Api.post("user/token/refresh", {
    //         Headers: {
    //             "Authorization": `Bearer ${refresh_token}`
    //         }
    //     })
    //     const data = await response.data;
        
    //     localStorage.setItem("access_token", data);

    // } else if (decoded_refresh_token["exp"]  > Date.now()){
    //     localStorage.removeItem("refresh_token")
    //     localStorage.removeItem("access_token")
    // }
    //  else {
    //     console.log("not now")
    // }
    


}


export default RefreshToken;