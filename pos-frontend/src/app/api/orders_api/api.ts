import api from "@/app/lib/axios"

export const getAllOrders = async()=>{
    try{
        const url="http://localhost:8080/orders/api/getAll"
        const response=await api.get(url);
        return response.data
    }catch(error:any){
        throw new Error("something went wrong")
    }
}
export const addOrder = async (data:any)=>{
    try{
        const url="http://localhost:8080/orders/api/add"
        const response=await api.post(url,data);
        return response.data
    }catch(error:any){
        throw new Error("something went wrong")
    }
}