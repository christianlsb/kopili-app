import Api from "./api"


export const PublishAPost = async (post)=>{

    const response = Api.post(`user/makePost/username=${localStorage.getItem("user_logged")}`,post, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    } )

    return response;

}