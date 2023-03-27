import { createSlice } from '@reduxjs/toolkit';
import booksService from '../service/books';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        page: 1,
        error: null,
        loading: true,
    },
    reducers: {
        setBooks(state, action) {
            state.books = [...state.books, ...action.payload];
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        upPage(state) {
            state.page = state.page + 1;
        },
    },
});

const { setBooks, setLoading, setError, upPage } = booksSlice.actions;

export const fetchBooks = (category, page, limit) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await booksService.getAll(category, page, limit);
        dispatch(setBooks(data.items));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
};
export const fetchMoreBooks = () => (dispatch) => {
    dispatch(upPage());
};

export default booksSlice.reducer;
