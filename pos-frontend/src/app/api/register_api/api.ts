import api from '@/app/lib/axios'

export const register = async(data:any)=>{
  const url:any = process.env.NEXT_PUBLIC_REGISTER;
  try {
  const response=await api.post(url,data);
  return response.data;
  }catch(error:any){
    return error?.response? error.response.data:error.message
  }


}