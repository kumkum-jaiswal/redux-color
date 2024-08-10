import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
    name:"bgcolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changecolor:(state,actions)=>{
            console.log(actions.playload);
            state.color=actions.payload
        }
    }
})
   

 
export default ColorSlice.reducer;
export const {changecolor}=ColorSlice.actions;