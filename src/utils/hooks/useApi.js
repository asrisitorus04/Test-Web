import axios from "axios"

export const useApi = async (method, url, body, contentType) => {
    let config = {
        method,
        url,
        data : body,
        headers : {
            "Content-Type" : contentType ? contentType : "application/json"
        },
    }
    const response = await axios(config)
    return response.data
}