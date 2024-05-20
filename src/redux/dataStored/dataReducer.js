import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCollapsed: false
};

const webSlice = createSlice({
    name: "webslice",
    initialState: initialState,
    reducers: {
        setLogged: function (state, action) {
            if (!action.payload) {
                state.loggedIn = false;
            } else {
                state.loggedIn = true;
            }
            sessionStorage.setItem("loggedIn", JSON.stringify(state.loggedIn));
        }
    },
});

export const {
    setLogged,
} = webSlice.actions;
export default webSlice.reducer;
