import Api from "./api";

const FetchTheFeedData = async function(){

    const response = await Api.get(`page/feed/username=${localStorage.getItem("user_logged")}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    const data = await response.data

    return data;

}


export default FetchTheFeedData;


