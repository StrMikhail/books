import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import booksService from '../service/books';
import Input from './Input';

const Search = () => {
    const [books, setBooks] = useState();
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!value) return setBooks();
        const fetch = setTimeout(() => fetchSearchBooks(value, 1, 3), 300);
        return () => clearTimeout(fetch);
    }, [value]);

    const fetchSearchBooks = async (categoty, page, limit) => {
        try {
            const data = await booksService.getAll(categoty, page, limit);
            setBooks(data.items);
        } catch (error) {
            console.log('Error');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className="search">
                <Input name="search" type="search" value={value} onChange={handleChange} />
                {books && (
                    <div className="search__result">
                        {books.map((book) => (
                            <Link
                                key={book.id}
                                to={book.id}
                                state={{ data: book }}
                                className="serch__item">
                                <div className="search__item-content">
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks.smallThumbnail !== undefined
                                                ? book.volumeInfo.imageLinks.smallThumbnail
                                                : book.volumeInfo.imageLinks.thumbnail
                                        }
                                        alt="book"
                                    />
                                    <div className="search__item-info">
                                        <span>{book.volumeInfo.title}</span>
                                        <p>
                                            {book.volumeInfo.authors
                                                ? book.volumeInfo.categories
                                                : 'Категории не заданы'}
                                        </p>
                                        <p>
                                            {book.volumeInfo.authors
                                                ? book.volumeInfo.authors
                                                : ' Авторы неизвестны'}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
