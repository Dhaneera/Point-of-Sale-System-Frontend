import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  roles: string;
  button: string;

}
interface Users{
    users: User[];
    selected?:{}
}

const initialState:Users={
    users:[],
    selected:[]
}

const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:((state:Users,action:PayloadAction<any>)=>{
            state.users=action.payload
        }),
        getUser:((state:Users,action:PayloadAction<any>)=>{
            state.selected=state.users.filter((element)=>{
                return element.id===action.payload
            })
        })
    }
})

export const{addUser,getUser}=UserSlice.actions
export default UserSlice.reducer