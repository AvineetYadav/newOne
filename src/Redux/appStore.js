import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        data: dataSlice,
        user:userSlice,
    }
})

export default appStore;