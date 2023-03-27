import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        category: 'all',
        search: null,
        sort: 'relevance',
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setCategory: (state, action) => {
            state.search = null;
            state.category = action.payload;
        },
    },
});

const { setSearch, setSort, setCategory } = searchSlice.actions;

export const setCurrentCategory = (category) => async (dispatch) => {
    dispatch(setCategory(category));
};
export const setCurrentSearch = (search) => async (dispatch) => {
    dispatch(setSearch(search));
};
export const setCurrentSort = (sort) => async (dispatch) => {
    dispatch(setSort(sort));
};

export default searchSlice.reducer;
