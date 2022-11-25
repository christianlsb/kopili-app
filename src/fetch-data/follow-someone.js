import Api from "./api"

export const FollowUser = async (username)=>{

    const user_logged = localStorage.getItem("user_logged");
    let post = {
        "test": null
    }
    const response = await Api.get(`user/followSomeone/user_1=${user_logged}/user_2=${username}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    return response;
}