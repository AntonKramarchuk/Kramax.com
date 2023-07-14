import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../constants/api";
import {getQueryParams} from "../../helpers/apiHelpers";

const initialState = {
    promotions: [],
    status: null,
    error: '',
}


export const fetchAsyncPromotions = createAsyncThunk(
    'promotions/fetchAsyncPromotions',
    async ({carousel}, {rejectWithValue}) => {
        try {
            const queryParams = carousel !== undefined ? getQueryParams({ carousel }) : getQueryParams({});

            const response = await axios.get(`${BASE_URL}/promotions/filter?${queryParams}`)
            return response.data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncPromotions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncPromotions.fulfilled, (state, action) => {
                state.promotions = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncPromotions.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })
    }
});
export default promotionsSlice.reducer;
