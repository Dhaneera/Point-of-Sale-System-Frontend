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
    const url:any ="http://localhost:8080/product/api/delete/"+id;
    try {
        const promise=await api.delete(url)
        console.log(promise);
        return promise.data
    }catch(error){
        return Promise.reject
    }
}

export const updateProductById = async(id:any,data:any)=>{
    const url:any ="http://localhost:8080/product/api/update/"+id;
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
    const url:any ="http://localhost:8080/product/api/add";
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