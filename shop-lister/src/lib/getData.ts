import axios from "axios"

const getAllData = async () => {
    const apiUrl = "https://shopicruit.myshopify.com/admin/products.json?access_token=c32313df0d0ef512ca64d5b336a0d7c6"

    // try to get data from api, in case of error warn user
    try {
        const response = await axios.get(apiUrl!)
        return response.data
        
    } catch (error) {
        return new Error ("Error on fetching Data")
    }
}

export default getAllData