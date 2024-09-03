import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
// import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const Store = configureStore({
    reducer: {
        app: appSlice,
        chat:chatSlice
    }
})
export default Store;