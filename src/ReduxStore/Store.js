import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "../Pages/Navbar/NavbarSlice";
export default configureStore({
  reducer: {
    Navbar: NavbarReducer,
  },
});
