import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import booksService from '../service/books';
import { setCurrentSearch } from '../store/search';
import Input from './Input';
import SearchResults from './SearchResults';

const Search = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState();
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!value) return setBooks();
        const fetch = setTimeout(() => fetchSearchBooks(value), 300);
        return () => clearTimeout(fetch);
    }, [value]);

    const fetchSearchBooks = async (search) => {
        try {
            const data = await booksService.getSearchHeader(search);
            setBooks(data.items);
        } catch (error) {
            console.log('Error');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCurrentSearch(e.target[0].value));
        setValue('');
    };

    return (
        <>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <Input
                        name="search"
                        type="search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </form>
                {books && (
                    <div className="search__result" style={{}}>
                        {books.map((book) => (
                            <SearchResults book={book} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
