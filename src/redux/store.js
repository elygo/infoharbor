import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataStored/dataReducer";

const store = configureStore({
  reducer: {
    website: dataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
