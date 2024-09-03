import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT } from "./Constants";
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        aDDMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT,1)
            state.messages.push(action.payload)
        },
    },
});
export const {aDDMessage}=chatSlice.actions
export default chatSlice.reducer;