import { createSlice } from '@reduxjs/toolkit';
import booksService from '../service/books';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: null,
        page: 1,
        error: null,
        loading: true,
    },
    reducers: {
        setBooks(state, action) {
            state.books = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

const { setBooks, setLoading, setError } = booksSlice.actions;

export const fetchBooks = (category, page) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await booksService.getAll(category, page);
        dispatch(setBooks(data));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
};

export default booksSlice.reducer;
