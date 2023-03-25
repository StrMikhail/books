import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        category: 'all',
        search: null,
        filter: null,
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

const { setSearch, setFilter } = searchSlice.actions;

export default searchSlice.reducer;
