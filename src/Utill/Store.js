import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
// import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import NewSearchSlice from "./NewSearchSlice";
const Store = configureStore({
    reducer: {
        app: appSlice,
        chat:chatSlice,
        new:NewSearchSlice
    }
})
export default Store;