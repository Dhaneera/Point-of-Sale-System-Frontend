import api from "@/app/lib/axios"
import axios from "axios"

export const getAllcategories = async ()=>{
    try {
        const url="http://localhost:8080/category/api/getAll"
        const promise=await api.get(url)
        return promise.data
    }catch(error){
        return Promise.reject
    }
}