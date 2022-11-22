import { useState } from "react";
import Api from "./api";

const FeedPostsData = async function(){

    const response = await Api.get(`page/feed/username=${localStorage.getItem("user_logged")}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
    })

    const data = await response.data;

    return data;

}


export default FeedPostsData;