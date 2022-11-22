import Api from "./api"

const FetchExplorarData = async ()=>{

    const response = await Api.get("page/explorar", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    const data = await response.data;

    return data;


}

export default FetchExplorarData;