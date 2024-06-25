import api from "@/app/lib/axios"

export const getAllCustomers = async()=>{
    try {
        const url:any= process.env.NEXT_PUBLIC_GET_ALL_CUSTOMERS;
        const response = await api.get(url);
        return response.data;
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}

export const deleteCustomerById = async(id:number)=>{
    try {
        const baseUrl:any=process.env.NEXT_PUBLIC_REMOVE_CUSTOMER;
        const url = `${baseUrl}${id}`;
        const response=await api.delete(url)
        return response.data
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}

export const getCustomerById = async (id:number)=>{
    try {
        const baseUrl:any=process.env.NEXT_PUBLIC_GETBYID_CUSTOMER;
        const url = `${baseUrl}${id}`;
        const response=await api.get(url)
        return response.data
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}

export const updateCustomerById = async(id:number,data:any)=>{
    try {
        const baseUrl=process.env.NEXT_PUBLIC_UPDATE_CUSTOMER;
        const url = `${baseUrl}${id}`;
        const response=await api.put(url,data)
        return response.data
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}

export const addCustomer= async (data:any)=>{
    try{
    const url:any = process.env.NEXT_PUBLIC_ADD_CUSTOMER;
    const response=await api.post(url,data)
    return response.data
    }catch(error:any){
        throw new Error("Something went wrong")
    }
}