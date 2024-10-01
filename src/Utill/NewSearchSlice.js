import { createSlice } from "@reduxjs/toolkit";

const NewSearchSlice=createSlice({
    name:"new",
    initialState : {
        allVideos : [],
    },
    reducers:{
        NewSearch:(state,action)=>{
            state.allVideos = action.payload;
            // console.log(state.allVideos)
        }
    }
})
export const { NewSearch } = NewSearchSlice.actions

export default NewSearchSlice.reducer