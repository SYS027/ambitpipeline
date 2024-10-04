import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: true,
};

const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    handleShow: (state) => {
      state.show = !state.show;
    }
  },
});

export const {handleShow} = NavbarSlice.actions;

export default NavbarSlice.reducer;
