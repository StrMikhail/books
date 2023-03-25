import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../store/books';

const Main = () => {
    const dispatch = useDispatch();
    const { books, loading, page } = useSelector((state) => state.books);
    const category = useSelector((state) => state.search.category);

    useEffect(() => {
        if (books) return;
        dispatch(fetchBooks(category, page));
    }, []);

    console.log(books);

    return (
        <>
            <div className="main">
                <div className="main__content container">
                    {!loading &&
                        books.items.map((book) => (
                            <Link
                                className="card"
                                key={book.id}
                                to={book.id}
                                state={{ data: book }}>
                                {book.volumeInfo.title}
                            </Link>
                        ))}
                </div>
            </div>
            {books && <button className="download">показать еще</button>}
        </>
    );
};

export default Main;
