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

export const getAllUsers = async ()=>{
  const url:any = process.env.NEXT_PUBLIC_GET_ALL_USERS;
  try {
    const response=await api.get(url)
    return response.data
  }catch(error:any){
    throw Error ("Something went wrong try again later")
  }
}

export const deleteUserById = async (id:any)=>{
  const url:any = process.env.NEXT_PUBLIC_DELETE_ALL_USERS+id;
  try {
    const response=await api.delete(url)
    return response.data
  }catch(error:any){
    throw Error ("Something went wrong try again later")
  }
}

export const updteUserById = async (id:any,data:any)=>{
  const url:any = process.env.NEXT_PUBLIC_UPDATE_USER+id;
  try {
    const response=await api.put(url,{
      username:data.username,
      password:"12345"
    })
    return response.data
  }
  catch(error:any){
    throw Error ("Something went wrong try again later")
  }
}

export const addUsersApi = async (data:any)=>{
  try{
  const url:any=process.env.NEXT_PUBLIC_ADD_USER
  const response=await api.post(url,{
    username:data.username,
    password:"12345"
  })
  return response.data
  }catch(error:any){
    throw Error ("Something went wrong try again later")
  }
}