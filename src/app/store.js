import { configureStore, getDefaultMiddleware } from "@redux/toolkit";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
