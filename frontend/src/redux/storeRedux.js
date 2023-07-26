import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./user.slicer";

const storeRedux = configureStore({
  reducer: {
    userStore: userSlicer,
  }
});

export default storeRedux;