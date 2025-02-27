import apiEndPoint from './endpoint'

export default async function apiCall() {
    console.log("function called")
    const request = await fetch(apiEndPoint)
    const response = await request.json()
    return(response)
}