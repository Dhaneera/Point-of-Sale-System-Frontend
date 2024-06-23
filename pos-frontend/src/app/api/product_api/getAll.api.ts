import api from '@/app/lib/axios'
const getAllProducts = async() => {
    const url:any =process.env.NEXT_PUBLIC_GET_ALL_CATEGORIES;
    try {
        const promise=await api.get(url)
        console.log(promise);
        return promise.data
    }catch(error){
        return Promise.reject
    }
}
export default getAllProducts
