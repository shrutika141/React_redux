export const post = (data) => {
    console.log(data)
    return{
        type: "POST_DATA",
        payload: data
    }
}
