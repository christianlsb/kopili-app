import Api from "./api"


export const SearchUsers =  async (username) =>{

    const response = await Api.get(`user/findUsersByUsername/username=${username}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

   return response;

}