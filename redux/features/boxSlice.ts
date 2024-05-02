import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Click one of the buttons to call the API.",
    loading: false,
};

const boxSlice = createSlice({
    name: "box",
    initialState,
    reducers: {
        setApiResult: (state, action) => {
            state.value = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
            action.payload && (state.value = "Loading..."); 
        },
        setDefault: (state) => {
            state.value = initialState.value;
            state.loading = initialState.loading;
        },
    },
});

export default boxSlice.reducer;

export const selectApiResult = (state: { box: { value: any; }; }) => state.box.value;
export const selectLoading = (state: { box: { loading: any; }; }) => state.box.loading;

export const { setApiResult, setLoading, setDefault } = boxSlice.actions;