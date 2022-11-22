import Api from "./api"


const CardHeaderFetch = async (post_id) =>{

    const response = await Api.get(`user/findUserByPostId/post_id=${post_id}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    const data = await response.data;

    return data;


}

export default CardHeaderFetch;