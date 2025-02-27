
"use client"
import { useState, useEffect } from "react"
import apiCall from '@/app/api/api'
import axios from "axios"
import getAllData from "@/lib/getData"


const BrowseByTag = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{

        
        const data = axios.get("/api/getData")
            .then(response => setData(response.data))
        },[])
        console.log(data)

    return(
        <div>
            {/* {if data data.products.map()} */}
            <h1>Browse by Tag </h1>
        </div>
    )
}

export default BrowseByTag