import axios from "axios"

export const getPost = async() => {
    const response = await axios.get('https://staging.latv.com/other/wp-json/v1/get-home-page-posts')
    return response.data
}