import api from "@/app/lib/axios"

export const getAllCustomers = async()=>{
    try {
        const url="http://localhost:8080/customer/api/getAll"
        const response = await api.get(url);
        return response.data;
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}

export const deleteCustomerById = async(id:number)=>{
    try {
        const url="http://localhost:8080/customer/api/remove/"+id
        const response=await api.delete(url)
        return response.data
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}