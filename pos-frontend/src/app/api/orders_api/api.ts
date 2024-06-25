import api from "@/app/lib/axios"

export const getAllOrders = async()=>{
    try{
        const url:any=process.env.NEXT_PUBLIC_GET_ALL_ORDERS;
        const response=await api.get(url);
        console.log(response.data)
        return response.data
    }catch(error:any){
        throw new Error("something went wrong")
    }
}
export const addOrder = async (data:any)=>{
    try{
        const url:any=process.env.NEXT_PUBLIC_ADD_ORDER;
        const response=await api.post(url,data);
        return response.data
    }catch(error:any){
        throw new Error("something went wrong")
    }
}