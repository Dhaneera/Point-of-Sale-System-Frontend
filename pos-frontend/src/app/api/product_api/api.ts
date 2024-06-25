import api from '@/app/lib/axios'
const getAllProducts = async() => {
    const url:any =process.env.NEXT_PUBLIC_GET_ALL_PRODUCTS;
    try {
        const promise=await api.get(url)
        console.log(promise.data);
        return promise.data
    }catch(error){
        return error
    }
}


export const deleteProductById = async(id:any)=>{
    const baseUrl =process.env.NEXT_PUBLIC_REMOVE_PRODUCT;
     const url = `${baseUrl}${id}`;
    try {
        const promise=await api.delete(url)
        console.log(promise);
        return promise.data
    }catch(error){
        return Promise.reject
    }
}

export const updateProductById = async(id:any,data:any)=>{
    const baseUrl =process.env.NEXT_PUBLIC_UPDATE_PRODUCT;
    const url = `${baseUrl}${id}`;
    try {
        const finalData={
            name:data.name,
            price:data.price,
            desc:data.desc,
            category:{
                id:data.categoryId
            }
        }
        const promise=await api.put(url,finalData)
        console.log(promise);
        return promise.data
    }catch(error){
        return Promise.reject
    }
}


export const addProduct = async(data:any)=>{
    const url:any =process.env.NEXT_PUBLIC_ADD_PRODUCT;
    const finalData={
        name:data.name,
        price:data.price,
        desc:data.desc,
        category:{
            id:data.categoryId
        }
    }
    try {
        const promise=await api.post(url,finalData)
        console.log(promise);
        return promise.data
    }catch(error){
        return Promise.reject
    }

}
export default getAllProducts