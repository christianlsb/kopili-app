import Api from "./api"


export const FindUserData = async ()=>{

    const response = await Api.get(`user/findAUser/${localStorage.getItem("user_logged")}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    const data = await response.data;

    return data;

}