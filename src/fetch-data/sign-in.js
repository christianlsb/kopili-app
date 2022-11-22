import Api from "./api";
import jwtDecode from "jwt-decode";

const SignIn = async function(email, password){

    const login_data = new URLSearchParams();
    login_data.append("email", email);
    login_data.append("password", password);

    const response = await Api.post("kopili/login", login_data);

    const data = await response.data;

    let decoded_token = jwtDecode(data["access_token"]);


    localStorage.setItem("access_token", data["access_token"]);
    localStorage.setItem("refresh_token", data["refresh_token"]);
    localStorage.setItem("user_logged", decoded_token["sub"]);
    if (response.status != 200){
        alert("Email ou Senha incorretos");
        console.log("aqui")
    } else {
        window.location.href = '/feed'
        console.log("ali")
    }

    // console.log(data["access_token"])
    // console.log(data["refresh_token"])
    // console.log(localStorage.getItem("user_logged"));
    
    

}

export default SignIn;